# Integrate with other README2.md

# What's a component?

A component is a function or class that produces HTML to show the user ( using JSX) and handles feedback from the user ( using event handlers).

# Three Tenets of Components

1. Component Nesting: A component can be shown inside another component;
2. Component Reusability: Components must be reusable inside the application;
3. Component Configuration: Configure a component when it's created;

# Component Hierarchy

Diagram that shows the different components currently being displayed in the application, together with their relationships

Example:
App -> Comment

Single instance of App component, single instance of Comment component.
Since the App component shows the Comment component, or the Comment component is nested inside the App component, the former is referred to as PARENT COMPONENT, the latter as CHILD COMPONENT.

## Props (short for Properties)

System for passing data from parent component to child component.
The ultimate goal is to customize the child in order to either show something on the screen or react to user interaction.

~index.js~
<ApprovalCard>
<CommentDetail
        author="Sam"
        content="Awesome post!"
    />
</ApprovalCard>

~ApprovalCard.js~
const ApprovalCard = props => {
return (
...

<div className="content">{props.children}</div>
 ...
);

};

By wrapping CommentDetail inside ApprovalCard, the props of the former will be available to the latter as props.children.

# Function components

Function components used to have restricted capabilites. As of now, they've been updated to:

1. Produce JSX to show content to the user;
2. Can use HOOKS to run code at specific points in time (corresponding to Lifecycle Method system for Class components);
3. Can use HOOKS to access state system and update content on screen (as for Class components);
