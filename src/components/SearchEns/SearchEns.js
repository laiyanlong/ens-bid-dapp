import React from 'react';
import {SearchResult} from './SearchResult';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import './SearchEns.css';

const SearchDescription = () => (
  <div className="SearchDescription">
    <h1>Your Identity on Ethereum</h1>
  </div>
);

const SearchInput = (props) => {
  const searchInputField = 
    <Input
      className="SearchEns-input"
      placeholder="Search"
      minLength="7"
      inputProps={{
        'aria-label': 'Search',
      }}
      disableUnderline
      value={props.value}
      onChange={props.handleSearchChange}
      onKeyPress={props.handleSearchKeyPress}
    />;

  const ethTipName = 
    <div>
      <Typography type="title" component="p" className="SearchEns-typography">
        .eth
      </Typography>
    </div>;
  
  const searchButton = 
    <IconButton aria-label="Search" onClick={props.handleSearchClick}>
      <i className="material-icons">search</i>
    </IconButton>;

  return (
    <div  className="SearchEns-paper">
      <Paper className="SearchEns-input-block">
        {searchInputField}
        {ethTipName}
        {searchButton}
      </Paper>
    </div>
  );
};

export const SearchEns = (props) => (
  <div className="SearchEns">
    <SearchDescription />
    <SearchInput 
      value={props.searchValue}
      handleSearchChange={props.handleSearchChange}
      handleSearchClick={props.handleSearchClick}
      handleSearchKeyPress={props.handleSearchKeyPress}
    />
    <SearchResult {...props} />
  </div>
);
