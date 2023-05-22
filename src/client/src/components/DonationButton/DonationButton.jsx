import styles from "./DonationButton.module.sass";

const DonationButton = () => {
  window.PayPal.Donation.Button({
    env:'production',
    hosted_button_id:'K6KMGQFCGEWCQ',
    image: {
    src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
    alt:'Donate with PayPal button',
    title:'PayPal - The safer, easier way to pay online!',
    }
  }).render('#donate-button');
  return (
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  )
}

export default DonationButton;
