import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/6 mx-auto mt-8'>
            <h2 className='text-3xl text-center my-5'>Q/A</h2>
            <div class="collapse mb-5">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>To improve the performance of a react application , need to make sure that components receive only necessary props.It will let control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components,have to keep component state local where necessary,Code-splitting in React using dynamic import().</p>
                </div>
            </div>
            <div class="collapse mb-5">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>There are four main types of state to manage a state in a react Application : Local state,Global state,Server state,URL state.Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state.</p>
                </div>
            </div>
            <div class="collapse mb-5">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p><span className='font-bold'>Ans:</span> Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div class="collapse mb-5">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div class="collapse mb-5">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Click me to show/hide content
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;