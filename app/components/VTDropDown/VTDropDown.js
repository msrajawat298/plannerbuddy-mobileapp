import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-element-dropdown';
import getStyles from './styles';

const VTDropDown = ({ label = 'Select Event', items, value, onChange }) => {
  const styles = getStyles();
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={items}
        autoScroll
        search
        searchField="label"
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? label : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setIsFocus(false);
          onChange(item.value);
        }}
        containerStyle={styles.containerStyle}
        itemTextStyle={styles.itemTextStyle}
      />
    </View>
  );
};

VTDropDown.propTypes = {
  // eslint-disable-next-line react/require-default-props
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default VTDropDown;
