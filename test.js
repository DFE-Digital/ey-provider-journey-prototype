const { NotifyClient } = require("notifications-node-client");

const apiKey = ''; // replace with your actual API key
const templateId = 'e571db62-1c28-4d43-990b-ad856dd47bbf';
const notifyClient = new NotifyClient(apiKey);

notifyClient.sendEmail(templateId, "xanthe.hughes-campbell@education.gov.uk")
  .then(response => {
    console.log("Email sent successfully:", response);
  })
  .catch(error => {
    console.error("Error sending email:", error);
  });
