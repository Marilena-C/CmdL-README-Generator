# Cmd-Line-README-Generator

Command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README file for the app. 
This should include info such what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions to the success of the project. 

This app is helping the user create a README file by using a command-line application, to generate the markdown file quickly and easily. This allows the project creator to devote more time to working on the project.


The application will be invoked by using the following command:

```bash
node index.js
```

  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README


## Screenshots

![Js-md-Terminal](assets/images/Screenshot_js-md-terminal.jpg)

![Teminal](assets/images/Screenshot_Terminal.jpg)
## Links to submitted items

* A walkthrough video demonstrating the functionality of the application.
Link to the video: https://watch.screencastify.com/v/nudVveb6sjAQDVOOrREl
* A sample README.md file for a project repository generated using your application: 
https://github.com/Marilena-C/CmdL-README-Generator/blob/main/README-file.md
![Sample file](assets/images/sample_file_generated_using_app.jpg)



* The URL of the GitHub repository: 

https://github.com/Marilena-C/CmdL-README-Generator


---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
