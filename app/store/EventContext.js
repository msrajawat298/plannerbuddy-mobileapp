/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../utils/customAxios';

// Define the async thunk
export const fetchEvents = createAsyncThunk(
  'event/fetchEvents',
  async (queryData, { rejectWithValue }) => {
    const { page, searchQuery } = queryData;
    const params = {
      page,
      limit: 50,
      order: 'ASC',
    };
    if (searchQuery) {
      params.filter = JSON.stringify({ eventName: searchQuery });
    }
    try {
      const response = await customAxios.get('event', { params });
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    status: 'idle',
    mode: null,
    editIndex: null,
    showModal: false,
    page: 1,
    totalPages: 0,
    error: null,
    searchEvents: false,
  },
  reducers: {
    addEvent(state, action) {
      state.events = [...new Set([action.payload.event, ...state.events])];
    },
    addEvents(state, action) {
      state.events = [...new Set([...state.events, ...action.payload])];
    },
    setSearchEvents(state, action) {
      state.searchEvents = action.payload.searchEvents;
    },
    addGuestsToEvent(state, action) {
      const updatedEvent = [...state.events];
      const eventIndex = updatedEvent.findIndex((e) => e.id === state.editIndex);
      if (eventIndex !== -1) {
        const event = updatedEvent[eventIndex];
        event.guests = [...action.payload.guests];
        updatedEvent[eventIndex] = { ...event };
        state.mode = null;
        state.events = updatedEvent;
      }
    },
    setMode(state, action) {
      state.mode = action.payload.mode;
    },
    setEditIndex(state, action) {
      state.editIndex = action.payload.idx;
    },
    openDialog(state) {
      state.showModal = !state.showModal;
    },
    closeDialog(state) {
      state.editIndex = null;
      state.mode = null;
      state.showModal = !state.showModal;
    },
    updateEvent(state, action) {
      const updatedEvent = { ...action.payload.event };
      let allEvents = [...state.events];
      allEvents = allEvents.map((event) => {
        if (event.id === action.payload.id) return updatedEvent;
        return event;
      });
      state.events = allEvents;
      state.mode = null;
    },
    deleteEvent(state, action) {
      const remainingEvent = state.events.filter((e) => e.id !== action.payload.id);
      state.events = remainingEvent;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched guests to the array
        const eventData = action.payload.events.map((event) => ({
          id: event.eventId,
          name: event.eventName,
          date: event.eventDate,
          address: event.address,
          guests: [],
        }));
        // If searchQuery is not blank, replace the events array
        state.events = state.searchEvents ? eventData : state.events.concat(eventData);
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.currentPage;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const eventActions = eventSlice.actions;
export default eventSlice;
