import * as React from "react"

class Subscription extends React.Component {
  componentDidMount() {
    const { pathname } = window.location;
    window.location.replace('https://play.google.com/store/apps/details?id=app.kortz&pcampaignid=web_share');
  }

  render() {
    return null; // Or you can return a loading spinner or any other component while the redirection happens
  }
}

export default Subscription;
