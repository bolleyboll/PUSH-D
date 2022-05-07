import React from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Hey Geek!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
    end: true,
  },
];

const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  botAvatar: "aman.jpeg",
  floating: true,
};

export default function specHome() {
  return (
    <>
      <div className="container">
        <table
          className="table table-hover rounded shadow float-start my-5"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Message</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>      <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">224</th>
              <td>Aman</td>
              <td>Gupta</td>
              <td>Please change the doctor.</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Change Doctor
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="container chat">
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
      </div>
    </>
  );
}
