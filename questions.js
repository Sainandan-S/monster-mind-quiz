const quizQuestions = {

   
    level1: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which HTML tag is used to create a paragraph?",
            options: [
                "<p>",
                "<para>",
                "<text>",
                "<paragraph>"
            ],
            answer: 0
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            question: "Which HTML tag is used to display an image?",
            options: [
                "<image>",
                "<picture>",
                "<img>",
                "<src>"
            ],
            answer: 2
        },

        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: 1
        },

        {
            question: "Which CSS property is used to change text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "text-style"
            ],
            answer: 2
        },

        {
            question: "Which symbol is used for an ID selector in CSS?",
            options: [
                ".",
                "#",
                "*",
                "@"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to define a function in Python?",
            options: [
                "function",
                "func",
                "def",
                "define"
            ],
            answer: 2
        },

        {
            question: "Which symbol is used to write a comment in Python?",
            options: [
                "//",
                "/*",
                "#",
                "--"
            ],
            answer: 2
        },

        {
            question: "Which of the following is a Python list?",
            options: [
                "(1, 2, 3)",
                "[1, 2, 3]",
                "{1, 2, 3}",
                "<1, 2, 3>"
            ],
            answer: 1
        },

        {
            question: "Which function is the starting point of a C program?",
            options: [
                "start()",
                "begin()",
                "main()",
                "run()"
            ],
            answer: 2
        },

        {
            question: "Which symbol is used to end a statement in C?",
            options: [
                ":",
                ";",
                ".",
                ","
            ],
            answer: 1
        },

        {
            question: "Which format specifier is commonly used for an integer in C?",
            options: [
                "%f",
                "%c",
                "%d",
                "%s"
            ],
            answer: 2
        },

        {
            question: "Which extension is commonly used for a C++ source file?",
            options: [
                ".java",
                ".py",
                ".cpp",
                ".html"
            ],
            answer: 2
        },

        {
            question: "Which keyword is used to create a class in C++?",
            options: [
                "object",
                "class",
                "struct",
                "define"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to define a class in Java?",
            options: [
                "class",
                "Class",
                "define",
                "object"
            ],
            answer: 0
        },

        {
            question: "Which method is the entry point of a standard Java application?",
            options: [
                "start()",
                "main()",
                "run()",
                "execute()"
            ],
            answer: 1
        },

        {
            question: "Which symbol is used to end a statement in Java?",
            options: [
                ":",
                ".",
                ";",
                ","
            ],
            answer: 2
        },

        {
            question: "Which keyword is used to create an object in Java?",
            options: [
                "object",
                "create",
                "new",
                "class"
            ],
            answer: 2
        },

        {
            question: "Which data type is used to store true or false in Java?",
            options: [
                "boolean",
                "bool",
                "bit",
                "logical"
            ],
            answer: 0
        }
    ],

    level2: [

        {
            question: "Which HTML element is used to create a numbered list?",
            options: [
                "<ul>",
                "<ol>",
                "<li>",
                "<list>"
            ],
            answer: 1
        },

        {
            question: "Which HTML attribute specifies the destination of a hyperlink?",
            options: [
                "src",
                "href",
                "link",
                "target"
            ],
            answer: 1
        },

        {
            question: "Which HTML element is used to create a table row?",
            options: [
                "<td>",
                "<th>",
                "<tr>",
                "<row>"
            ],
            answer: 2
        },

        {
            question: "Which CSS property is used to change the space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: 1
        },

        {
            question: "Which CSS layout system is primarily designed for one-dimensional layouts?",
            options: [
                "Grid",
                "Flexbox",
                "Float",
                "Position"
            ],
            answer: 1
        },

        {
            question: "Which CSS property controls the space outside an element's border?",
            options: [
                "padding",
                "margin",
                "spacing",
                "outline"
            ],
            answer: 1
        },

        {
            question: "What is the output of print(2 ** 3) in Python?",
            options: [
                "5",
                "6",
                "8",
                "9"
            ],
            answer: 2
        },

        {
            question: "Which Python data type stores key-value pairs?",
            options: [
                "List",
                "Tuple",
                "Dictionary",
                "Set"
            ],
            answer: 2
        },

        {
            question: "Which keyword is used to handle exceptions in Python?",
            options: [
                "catch",
                "except",
                "error",
                "handle"
            ],
            answer: 1
        },

        {
            question: "What is the output of len([10, 20, 30, 40])?",
            options: [
                "3",
                "4",
                "5",
                "10"
            ],
            answer: 1
        },

        {
            question: "Which operator is used to access the value stored at a pointer address in C?",
            options: [
                "&",
                "*",
                "#",
                "%"
            ],
            answer: 1
        },

        {
            question: "What is the index of the first element of an array in C?",
            options: [
                "0",
                "1",
                "-1",
                "Depends on the array"
            ],
            answer: 0
        },

        {
            question: "Which header file is commonly required for printf() in C?",
            options: [
                "<string.h>",
                "<stdlib.h>",
                "<stdio.h>",
                "<math.h>"
            ],
            answer: 2
        },

        {
            question: "Which feature allows a C++ function to have multiple forms with different parameter lists?",
            options: [
                "Inheritance",
                "Function overloading",
                "Encapsulation",
                "Abstraction"
            ],
            answer: 1
        },

        {
            question: "Which access specifier makes class members accessible from outside the class?",
            options: [
                "private",
                "protected",
                "public",
                "internal"
            ],
            answer: 2
        },

        {
            question: "Which concept allows a derived class to acquire properties of a base class?",
            options: [
                "Inheritance",
                "Compilation",
                "Overloading",
                "Casting"
            ],
            answer: 0
        },

        {
            question: "Which keyword is used when one Java class inherits another class?",
            options: [
                "implements",
                "inherits",
                "extends",
                "super"
            ],
            answer: 2
        },

        {
            question: "Which Java collection does not allow duplicate elements?",
            options: [
                "List",
                "Set",
                "ArrayList",
                "Vector"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to implement an interface in Java?",
            options: [
                "extends",
                "implements",
                "interface",
                "inherit"
            ],
            answer: 1
        },

        {
            question: "Which Java keyword prevents a method from being overridden?",
            options: [
                "static",
                "constant",
                "final",
                "private"
            ],
            answer: 2
        }
    ],


    level3: [

        {
            question: "Which HTML element is semantically intended for the primary content of a document?",
            options: [
                "<section>",
                "<main>",
                "<article>",
                "<content>"
            ],
            answer: 1
        },

        {
            question: "Which attribute is used to associate a label with a form control?",
            options: [
                "for",
                "target",
                "idref",
                "control"
            ],
            answer: 0
        },

        {
            question: "Which HTML element is used to provide alternative text for an image?",
            options: [
                "<alt>",
                "The alt attribute of <img>",
                "<description>",
                "The text attribute of <img>"
            ],
            answer: 1
        },


        {
            question: "Which CSS property can change the stacking order of positioned elements?",
            options: [
                "stack",
                "z-index",
                "layer",
                "position-index"
            ],
            answer: 1
        },

        {
            question: "Which CSS unit is relative to the root element's font size?",
            options: [
                "em",
                "rem",
                "vh",
                "%"
            ],
            answer: 1
        },

        {
            question: "Which CSS feature is used to apply styles based on conditions such as screen width?",
            options: [
                "Pseudo-class",
                "Media query",
                "Keyframe",
                "Selector group"
            ],
            answer: 1
        },

        {
            question: "What is the output of the following Python code? x = [1, 2, 3]; print(x[-1])",
            options: [
                "1",
                "2",
                "3",
                "An error"
            ],
            answer: 2
        },

        {
            question: "Which Python feature allows a function to remember values from its enclosing scope?",
            options: [
                "Closure",
                "Decorator",
                "Generator",
                "Iterator"
            ],
            answer: 0
        },

        {
            question: "Which keyword is used to create a generator function in Python?",
            options: [
                "generate",
                "yield",
                "generator",
                "return"
            ],
            answer: 1
        },

        {
            question: "What does the Python expression {x: x*x for x in range(3)} create?",
            options: [
                "A list",
                "A tuple",
                "A dictionary",
                "A set"
            ],
            answer: 2
        },

        {
            question: "What does a pointer in C primarily store?",
            options: [
                "A function result",
                "A memory address",
                "A data type",
                "A program instruction"
            ],
            answer: 1
        },

        {
            question: "What is the purpose of the static keyword for a local variable in C?",
            options: [
                "It makes the variable constant",
                "It preserves the variable's value between function calls",
                "It makes the variable globally accessible",
                "It allocates the variable only in a CPU register"
            ],
            answer: 1
        },

        {
            question: "Which function is commonly used to dynamically allocate memory in C?",
            options: [
                "alloc()",
                "malloc()",
                "memory()",
                "new()"
            ],
            answer: 1
        },


        {
            question: "Which C++ feature allows a derived class to provide its own implementation of a virtual function?",
            options: [
                "Function hiding",
                "Runtime polymorphism",
                "Function overloading",
                "Template specialization"
            ],
            answer: 1
        },

        {
            question: "Which C++ keyword is used to declare a virtual function?",
            options: [
                "dynamic",
                "virtual",
                "override",
                "runtime"
            ],
            answer: 1
        },

        {
            question: "What does RAII primarily associate resource management with in C++?",
            options: [
                "Namespaces",
                "Object lifetime",
                "Templates",
                "Preprocessor directives"
            ],
            answer: 1
        },


        {
            question: "Which Java memory area stores objects created with new?",
            options: [
                "Stack",
                "Heap",
                "Method area only",
                "Register"
            ],
            answer: 1
        },

        {
            question: "Which Java mechanism automatically reclaims memory occupied by objects that are no longer reachable?",
            options: [
                "Destructor",
                "Garbage collection",
                "Memory reset",
                "Object clearing"
            ],
            answer: 1
        },

        {
            question: "Which Java keyword is used to explicitly invoke a superclass constructor?",
            options: [
                "this",
                "base",
                "super",
                "parent"
            ],
            answer: 2
        },

        {
            question: "Which Java concept allows the same method call to behave differently depending on the object's actual class?",
            options: [
                "Encapsulation",
                "Runtime polymorphism",
                "Compilation",
                "Package hiding"
            ],
            answer: 1
        }
    ]
};