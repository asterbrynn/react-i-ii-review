### Remember

Answer these on your own, then compare answers as a group

1.  What is React?
      JS library of functions (not a framework) that are provided for us to make our lives easier
      sometimes things are hard and we like shortcuts, why reinvent the wheel?

2.  What is create-react-app?
      a way to download an app of react, saves a lot of time

3.  What is Component Based Architecture?
      using multiple components that are independent, but combined form the user interface
      a component only knows itself and can be told things from its parent and can tell things to its children

4.  What is JSX?
      syntax of react that looks like HTML but is actually JavaScript

5.  What is the virtual DOM?
      simulation of the DOM that only updates what changed

6.  What is unidirectional (one-way) data flow?
    parent to child, not child to parent or sibling to sibling

### Understand

Discuss these questions in pairs if you have a 4-person group

7.  Summarize what happens when you run `create-react-app my-app`

8.  Explain what this code does:

```jsx
import React from "react";

const Mentor = props => (
  <div className="mentor-container">
    <h1 className={props.title === "Lead Mentor" ? "lead" : ""}>Tim Biles</h1>
    <ul>
      <li>Fort Worth, TX</li>
      <li>My email address is timbilestimbiles@gmail.com</li>
    </ul>
  </div>
);

export default Mentor;
```

9.  Explain how data is passed from a parent component to a child component.

### Apply

Try these on your own, but work together if you start to get stuck.

10.  Use `create-react-app` to create a new React application called `student-directory`

11.  Use the code from `Mentor` above to create a new functional, stateless component called `User` with a list of friends. Hard code the list of friends, do not use state or props.

### Analyze, Evaluate, Create

Discuss these questions as a group

12. What are the benefits and drawbacks of using a tool like create-react-app?

13. Compare and contrast JSX with other templating options, such as those used in Angular or Vue

14. Compare and contrast one-way data flow with two-way data binding.
