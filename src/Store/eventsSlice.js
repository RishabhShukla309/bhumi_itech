import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  eventsData: [
    {
      eventTag: 'Tcp-Project-Hub',
      eventFirstName: 'Project Hub',
      eventLastName: 'TCP',
      eventID: 409,
      status: 'Closed',
      clicked: false,
    },
    {
      eventTag: 'Kalakriti',
      eventFirstName: 'Kalakriti',
      eventLastName: 'Art Festival',
      eventID: 411,
      status: 'Closed',
      clicked: false,
    },
    {
      eventTag: 'Web Dev Expo',
      eventFirstName: 'Web Dev',
      eventLastName: 'Workshop',
      eventID: 410,
      status: 'Upcoming',
      clicked: false,
    },
    {
      eventTag: 'Event_4',
      eventFirstName: 'Sculpting',
      eventLastName: 'Exhibition',
      eventID: 2,
      status: 'Upcoming',
      clicked: false,
    },
  ],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    //  reducers comes here
    openEventPost: (state, action) => {
      state.eventsData.map((option) => {
        option.clicked = option.eventID === action.payload;
      });
    },
    closeEventPosts: (state, action) => {
      state.eventsData.map((option) => {
        option.clicked = false;
      });
    },
  },
  extraReducers: () => {
    //  Extra reducers comes here
  },
});
export const {openEventPost, closeEventPosts} = eventsSlice.actions;
export default eventsSlice.reducer;
