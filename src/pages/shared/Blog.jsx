import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div className='lg:w-[60%] conatiner mx-auto'>
            <h1 className='text-3xl font-bold text-center my-10'>FAQ</h1>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <div className='flex justify-end pr-8'>
                    <button onClick={toPdf} className='flex items-center mb-2 bg-success py-1 px-3 text-white rounded'>
                        <FaDownload></FaDownload> <span className='ms-2'>Download pdf</span>
                    </button>
                </div>}
            </Pdf>

            <div className='px-8 pt-2' ref={ref}>
                <div className='border border-stone-800 p-4 mb-2'>
                    <h1 className='mb-4'> <strong>Question :</strong> What is the differences between uncontrolled and controlled components ?</h1>
                    <p><strong>Answer :</strong> Uncontrolled components provide more flexibility and ease of integration, but are subject to potential issues and changes beyond the control of the developer. <br /> Controlled components offer more reliability and control, but require more time and resources to build and maintain.</p>
                </div>
                <div className='border  border-stone-800 p-4 mb-2'>
                    <h1 className='mb-4'> <strong>Question :</strong>How to validate React props using PropTypes ?</h1>
                    <p><strong>Answer :</strong>  PropTypes is a built-in library that can be used to validate the props passed to a component.PropTypes can be used to validate a wide range of data types, including strings, numbers, booleans, arrays, objects, and more. It can also be used to validate custom data types, such as shapes or enums. <br />
                    By using PropTypes, we can make our code more robust and maintainable, ensuring that yourcomponents receive the correct data types and reducing the likelihood of runtime errors.PropTypes also serves as a form of documentation, making it easier for other developers tounderstand the intended usage of your components.</p>
                </div>
                <div className='border  border-stone-800 p-4 mb-2'>
                    <h1 className='mb-4'> <strong>Question :</strong> What is the differences between Node.js and Express.js ?</h1>
                    <p><strong>Answer :</strong>  Node.js is a runtime environment that provides the platform for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that provides additional functionality and structure for building web applications. <br />
                    Node.js is a low-level platform that provides basic features such as file system access, networking, and event handling. Express.js is a higher-level framework that provides additional features such as routing, middleware, and templating.</p>
                </div>
                <div className='border  border-stone-800 p-4 mb-4'>
                    <h1 className='mb-4'> <strong>Question :</strong> What is a custom hook, and why will you create a custom hook ?</h1>
                    <p><strong>Answer :</strong> Custom hooks are reusable functions that encapsulate related logic and can be shared across multiple components in a React application. They provide several benefits, including code reusability, improved readability, improved testing, and better code organization.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;