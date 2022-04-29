import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Difference between javascript and nodejs</h1>
            <p>
                JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine. On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language. Javascript,	It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++.Node js , It uses C, C++, and JavaScript.Node js based on Javascript.Nodejs is used in server-side development.Javascript is used in frontend development.
            </p>
            <h1>Differences between sql and nosql databases</h1>
            <p>SQL databases have fixed or static or predefined schema. NoSQL databases have dynamic schema. SQL databases display data in form of tables so it is known as table-based database. NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.</p>
            <h1>
                What is the purpose of jwt and how does it work
            </h1>
            <p>JWTs are used as a secure way to authenticate users and share information.

                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.So we can say its main purpose is a Security and Verifiying User.In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.
            </p>
        </div>
    );
};

export default Blogs;