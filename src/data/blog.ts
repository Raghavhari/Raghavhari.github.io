export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ContentBlock =
  | { type: "text"; text: string }
  | { type: "image"; image: BlogImage }
  | { type: "code"; code: string; language?: string };

export type Blog = {
  slug: string;
  title: string;
  preview: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  coverImage?: BlogImage;
  contentBlocks: ContentBlock[];
};

export const blogs: Blog[] = [
  {
    slug: "django-startup",
    title: "Behind the Scenes of Django: From Startup to Serving Your First Request",
    preview: "Ever wondered what actually happens when you run python manage.py runserver and open a Django page for the first time?",
    date: "Oct 22, 2025",
    readTime: "6 min",
    tags: ["Django", "Python", "Backend"],
    featured: true,
    coverImage: {
      src: "/Django.webp",
      alt: "Green terminal code representing backend work",
    },
    contentBlocks: [
      {
        type: "text",
        text: "When people start learning Python, their eyes light up with excitement. It feels like a piece of cake. But when they move on to Django, a feature-rich framework, they often feel like they’ve stepped into an Amazon forest!",
      },
      {
        type: "text",
        text: "If you’re learning Django, it’s important to first understand how the flow of execution works. In this article, we’ll dive deep into the flow that happens when we run the runserver command, basically, how a Django project starts running."
      },
      {
        type: "text",
        text: "Learning Django isn’t easy, so be patient in the beginning. That patience will solve most of your problems."
      },
      {
        type: "text",
        text: "We’ll go step by step, explaining each part clearly and showing code examples along the way.\n\nRunning the Project! Once the project is created, you’ll run the server with:"
      },
      {
        type: "code",
        code: "python manage.py runserver",
      },
      {
        type: "text",
        text: "This is where the magic begins! Let’s see what happens under the hood.\n\nThe manage.py File — The Entry Point",
      },
      {
        type: "text",
        text: "When you run the above command, you are not directly starting the server; you are running the manage.py file."
      },
      {
        type: "text",
        text: "This file is a thin wrapper around Django’s command-line utility (django-admin). It helps Django know where your settings are and what command you want to execute.\n\nIn other words, Django comes with some built-in default settings, but it doesn’t know about your specific project’s configuration until you tell it. This wrapper explicitly tells Django which settings.py to use and provides access to built-in functions and commands for running, migrating, and managing your project."
      },
      {
        type: "text",
        text: "Internally, Django loads your settings.py as a module and wraps it in a special LazySettings object (django.conf.LazySettings). This object provides access to all your settings, such as settings.INSTALLED_APPS, settings.DATABASES, and settings.MIDDLEWARE. It also applies default values for any missing settings. Whenever Django needs to know about your apps, database, or middleware, it looks them up through this LazySettings object.\n\nInside manage.py, you’ll find a line like this:"
      },
      {
        type: "code",
        code: "os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'vidly.settings')"
      },
      {
        type: "text",
        text: "This sets the DJANGO_SETTINGS_MODULE environment variable, telling Django which settings file to load. Without it, Django wouldn’t know your project’s configuration and would not be able to run commands like runserver or migrate properly.\n\nDjango Loads Settings\n\nAfter identifying which settings file to use, Django starts initializing. It calls:"
      },
      {
        type: "code",
        code: "django.setup()"
      },
      {
        type: "text",
        text: "Here's what the above function does internally:\n\n-- Configures and loads the settings from settings.py\n\n-- Populates the application registry by registering all apps listed in INSTALLED_APPS\n\n-- Loads models from each app into Django's model registry\n\n-- Configures logging and other Django subsystems"
      },
      {
        type: "text",
        text: "Django's Command Registry\n\nOnce Django is ready, it looks for available commands. These can be:\n\n-- Built-in commands (like runserver, migrate, createsuperuser)\n\n-- Custom commands (you can create your own under app/management/commands/)\n\nDjango uses its command registry to find the command you typed, in this case, runserver.\n\nThe next important line in manage.py is:"
      },
      {
        type: "code",
        code: "execute_from_command_line(sys.argv)"
      },
      {
        type: "text",
        text: "This function:\n\n-- Parses the command-line arguments from sys.argv\n\n-- Finds the appropriate command class (e.g., RunserverCommand) from Django's command registry\n\n-- Creates an instance of that command class\n\n-- Calls the execute() method, which internally calls handle()\n\nSystem Checks and Validation"
      },
      {
        type: "text",
        text: "Before the handle() is called, system checks are performed. Django checks your entire project for common errors, including:\n\n-- Models configuration\n\n-- Settings validation\n\n-- URL patterns\n\n-- Database configuration\n\nThe handle() Method\n\nThen, the handle() method is called, which:"
      },
      {
        type: "text",
        text: "-- Validates the IP address and port\n\n-- Checks settings like ALLOWED_HOSTS (especially if DEBUG=False)\n\n-- Parses the address format (IPv4 or IPv6)\n\n-- Sets the default address to 127.0.0.1:8000 if none is specified\n\nThe run() Method — Auto-Reloader Decision"
      },
      {
        type: "text",
        text: "Then the run() method is called, which decides whether to use the auto-reloader:\n\n-- If use_reloader=True (default): Wraps inner_run() with the auto-reloader\n\n-- If use_reloader=False (with — noreload flag): Calls inner_run() directly\n\nDjango uses StatReloader by default, but can also use WatchmanReloader for better performance if Watchman is installed."
      },
      {
        type: "text",
        text: "The inner_run() Method\n\nFinally, the inner_run() method is executed, which:\n\n-- Performs final system checks and migration checks\n\n-- Retrieves the WSGI handler by calling get_handler()\n\n-- Starts the actual development server\n\nGetting the WSGI Handler\n\nBefore starting the development server, the get_handler() method returns the default WSGI handler by calling get_internal_wsgi_application()."
      },
      {
        type: "text",
        text: "The WSGI handler (from get_wsgi_application() in wsgi.py):\n\n-- Returns a WSGI-compatible callable application that can be used by any WSGI server to forward requests to Django\n\n-- Instantiates and loads all middleware defined in settings.MIDDLEWARE\n\n-- Configures URL routing from your URLconf\n\n-- Returns a callable that the server invokes for every incoming HTTP request\n\nStarting the Development Server"
      },
      {
        type: "text",
        text: "Finally, Django starts its built-in development server (a lightweight WSGI server) that:\n\n-- Listens on the specified address and port (default: 127.0.0.1:8000)\n\n-- Handles incoming HTTP requests\n\n-- Passes requests through the WSGI handler to your Django application\n\n4. Automatically reloads Python code when changes are detected (unless — noreload is used)\n\nNow, let’s understand how requests and responses flow while the development server is live."
      },
      {
        type: "text",
        text: "Step 1: Request Arrives at the Development Server\n\nWhen you visit http://127.0.0.1:8000/blog/post/1/, the request first hits Django’s development server (or production server like Gunicorn/uWSGI in production).\n\nThe development server:\n\n-- Receives the raw HTTP request from the browser\n\n-- Passes it to the WSGI handler (the entry point we discussed earlier)\n\n-- The WSGI handler wraps the raw HTTP request into Django’s HttpRequest object."
      },
      {
        type: "text",
        text: "Step 2: Request Passes Through Middleware (Forward Direction)\n\nBefore reaching your view, the request must pass through middleware, Django’s framework of hooks into request/response processing.\n\nThe Middleware Stack — “The Onion Model”\n\nMiddleware processes requests in the order defined in settings.MIDDLEWARE (top-down). Think of it like layers of an onion:"
      },
      {
        type: "code",
        code: "MIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',           # Layer 1 (Outer)\n    'django.contrib.sessions.middleware.SessionMiddleware',    # Layer 2\n    'django.middleware.common.CommonMiddleware',               # Layer 3\n    'django.middleware.csrf.CsrfViewMiddleware',               # Layer 4\n    'django.contrib.auth.middleware.AuthenticationMiddleware', # Layer 5\n    'django.contrib.messages.middleware.MessageMiddleware',    # Layer 6\n    'django.middleware.clickjacking.XFrameOptionsMiddleware',  # Layer 7 (Inner)\n]"
      },
      {
        type: "text",
        text: "How Middleware Processes Requests\n\nEach middleware can:\n\n-- Modify the request object: Add attributes, validate data, or enrich the request.\n\n-- Short-circuit the process: Return an HttpResponse immediately, bypassing the remaining middleware and views.\n\n-- Pass the request forward: Call get_response() to pass control to the next middleware or view.\n\nImportant: If any middleware returns an HttpResponse instead of calling get_response(), the request never reaches the view, and only the middleware that already processed it will handle the response on the way back."
      },
      {
        type: "text",
        text: "Step 3: URL Routing — Finding the Right View\n\nIf the request passes through all middleware layers, Django’s URL dispatcher takes over.\n\nHow URL Routing Works\n\n-- Load ROOT_URLCONF: Django loads the URL configuration specified in settings.ROOT_URLCONF (usually vidly.urls)\n\n-- Pattern Matching: Django iterates through urlpatterns in order and tests each URL pattern against the requested URL\n\n-- First Match Wins: As soon as Django finds a matching pattern, it stops searching and calls the associated view\n\n-- Extract Parameters: If the URL pattern contains parameters (like <int:id>), Django extracts them and passes them to the view"
      },
      {
        type: "text",
        text: "Step 4: View Execution — Processing the Request\n\nOnce the URL dispatcher finds a match, it calls the corresponding view function or class-based view.\n\nStep 5: Database Operations (ORM)\n\nViews typically interact with the database using Django’s Object-Relational Mapper (ORM).\n\nStep 6: Serialization (For REST APIs)\n\nIf you’re building a REST API with Django REST Framework (DRF), views use serializers. When it is a GET request, it queries and retrieves the data as an object, then the serializer converts it to a dictionary and then to JSON. When it is a POST request or others, it receives data, uses the serializer to convert it into an object, and then saves the data."
      },
      {
        type: "text",
        text: "Step 7: Response Generation\n\nAfter processing, the view must return an HttpResponse object (or its subclasses).\n\nStep 8: Response Passes Through Middleware (Reverse Direction)\n\nAfter the view returns a response, it travels back through the middleware stack in reverse order (from the innermost to the outermost layer).\n\nExample, Security Middleware adds headers:"
      },
      {
        type: "code",
        code: "Strict-Transport-Security: max-age=31536000\n\nX-Content-Type-Options: nosniff\n\nX-Frame-Options: DENY"
      },
      {
        type: "text",
        text: "Step 9: Response Sent to Browser\n\nFinally, the WSGI handler:\n\n-- Converts the HttpResponse object into a raw HTTP response\n\n-- Sends it back to the development server\n\n-- The server transmits it to the client’s browser.\n\nNow you have a complete picture of how Django handles every request from start to finish!"
      }
    ],
  },
  {
    slug: "java-memory-management",
    title: "The Untold Story of Java Memory Management",
    preview: "Understanding Java's garbage collection, heap vs stack memory, memory leaks, and best practices for efficient memory management in production applications.",
    date: "Aug 24, 2025",
    readTime: "10 min",
    tags: ["Java", "Backend"],
    featured: false,
    coverImage: {
      src: "/jvm.webp",
      alt: "Filling",
    },
    contentBlocks: [
      {
        type: "text",
        text: "Memory Management is the most important topic in Java that every developer should understand—the stuff you may have thought to ignore (but can’t).\n\nGuys, think about an e-commerce website like Amazon. During a big sale (like Black Friday), thousands of users add items to their cart. If memory isn’t managed properly—for example, if every cart object stays in memory even after checkout or logout—the server can quickly run out of memory. The result? Slow responses, system crashes, and lost sales.",
      },
      {
        type: "text",
        text: "When writing Java code, it’s easy to assume the Garbage Collector will handle everything for you since it automatically frees unused memory.\n\nBad news: memory isn’t infinite. Once an application exceeds available memory, Java throws an OutOfMemoryError, a critical error that can abruptly terminate your program.\n\nIf you want your code to survive in production (and not die during a client demo), you need to understand how Java manages memory.\n\nLet’s dive deep without drowning in jargon,"
      },
      {
        type: "image",
        image: {
          src: "/jdk.webp",
          alt: "JVM architecture"
        }
      },
      {
        type: "text",
        text: "In Java, memory is managed by the JVM (Java Virtual Machine), which acts as the runtime environment that executes Java bytecode.\n\nBefore diving deep into JVM internals, let’s first understand how values and references are stored.\n\nFor now, think of memory being split into two main areas: Stack and Heap."
      },
      {
        type: "image",
        image: {
          src: "/heap_stack.webp",
          alt: "Heap and Stack illustration"
        }
      },
      {
        type: "text",
        text: "In Java, all variables and primitive values are stored directly in the stack. For objects, only the reference variable is stored in the stack, while the actual object is stored in the heap. Moreover, many reference variables can point to the same object. If the object value is changed, the change is visible through all reference variables."
      },
      {
        type: "code",
        code: "List<Integer> a = new ArrayList<>(Arrays.asList(2, 1, 3, 4));\nList<Integer> b = a; // both 'a' and 'b' refer to the same object\nList<Integer> c = new ArrayList<>(Arrays.asList(0, 8, 9, 5)); // new object"
      },
      {
        type: "image",
        image: {
          src: "/heap_stack_function.webp",
          alt: "Heap and Stack illustration"
        }
      },
      {
        type: "text",
        text: "If there is an object in the heap that points to no reference variable, then it is garbage collected.\n\nIn contrast, in C/C++, all variables and objects are stored in the stack unless we use malloc or new to specifically allocate memory on the heap.\n\nNow, let’s dive deep into how primitive data types are stored in the memory,\n\nAs we know, primitive data types are the basic building blocks for handling data efficiently. They take up less memory and are processed faster because they store raw values directly in the stack, unlike objects, which are stored in the heap.\n\nJava has 8 primitive types,"
      },
      {
        type: "code",
        code: "// Integer types\nbyte b = 10;           // 1 byte  (8 bits)   Range: -128 to 127\nshort s = 1000;        // 2 bytes (16 bits)  Range: -32,768 to 32,767\nint i = 50000;         // 4 bytes (32 bits)  Range: -2^31 to 2^31 - 1\nlong l = 100000L;      // 8 bytes (64 bits)  Range: -2^63 to 2^63 - 1\n\n// Floating point types\nfloat f = 3.14f;       // 4 bytes (32 bits)  Precision: ~6–7 decimal digits\ndouble d = 3.14159;    // 8 bytes (64 bits)  Precision: ~15 decimal digits\n\n// Character type\nchar c = 'A';          // 2 bytes (16 bits)  Range: 0 to 65,535 (Unicode)\n\n// Boolean type\nboolean flag = true;   // JVM dependent (usually 1 bit, stored as 1 byte)"
      },
      {
        type: "text",
        text: "Local primitive data types live in the stack; if they are part of an object or a class, it is stored in the heap."
      },
      {
        type: "image",
        image: {
          src: "/stack_example.webp",
          alt: "Stack example"
        }
      },
      {
        type: "text",
        text: "Since every primitive type is predefined, Java knows exactly how much space to reserve for them in memory. They occupy the same amount of memory regardless of the system architecture.\n\nFor boolean, it could be stored in just 1 bit, but Java does not store it that way. Instead, each boolean is stored as 1 full byte (8 bits). This is because the CPU reads memory in bytes, not bits.\n\nUsing bytes avoids something called word tearing, which happens when two or more threads try to change values stored in the same bit.\n\nBasically, CPUs prefer bytes; it’s easier for them to access whole bytes rather than figuring out which bit inside a byte belongs to a variable.\n\nNow let’s take a function as an example,"
      },
      {
        type: "code",
        language: "java",
        code: "public class PrimitiveExample {\n\n    public static void main(String[] args) {\n        int num = 10;\n        System.out.println(\"Before method call: \" + num);\n\n        changeValue(num);\n\n        System.out.println(\"After method call: \" + num);\n    }\n\n    public static void changeValue(int x) {\n        int sum = x + 5;\n        System.out.println(\"Inside method: \" + sum);\n    }\n}"
      },
      {
        type: "code",
        code: "Before method call: 10\n\nInside method: 15\n\nAfter method call: 10\n"
      },
      {
        type: "text",
        text: "In Java, when we pass a primitive value to a function, it is always pass by value. This means that only a copy of the variable’s value is sent to the function, not the original one. When the function is called, the JVM creates a new block of memory in the stack, called a stack frame, to hold that function’s local variables and parameters."
      },
      {
        type: "image",
        image: {
          src: "/stack_frame.webp",
          alt: "Primitive stack illustration"
        }
      },
      {
        type: "text",
        text: "The stack itself follows the LIFO (Last In, First Out) rule, so the most recently called function is the first one removed once it finishes execution.\n\nIn the above, we have a variable num with the value 10 and call changeValue(num), the number 10 is copied into the parameter x. Inside the changeValue function, sum is updated to 15, but this change only affects the copy inside the function’s stack frame. The original variable num in the main method remains 10.\n\nOnce the function completes, its stack frame is discarded automatically by the JVM. Since stack memory is automatically managed, there is no need for garbage collection in this case.\n\nNow let’s deep dive into heap,\n\nIn heap memory, objects are allocated dynamically at runtime and require garbage collection."
      },
      {
        type: "code",
        code: "Integer num = new Integer(1);"
      },
      {
        type: "text",
        text: "When we declare an Integer object, the JVM stores it in the heap, along with some extra information inside the object header:\n\n-- Class Metadata: The JVM keeps a small piece of data inside the object header to remember its class type.\n\n-- Hash Code: Objects in Java can be used in HashMaps, HashSets, etc. For that, they often need a hash code, which is a number derived from the object’s data. This hash code is stored in the object header, so it doesn’t need to be recalculated every time. (Mainly, HashMaps don’t use the reference variable directly; they use the hash code.)\n\n-- Padding: If the object data doesn’t perfectly fit in memory, the JVM adds a little space called padding to make it line up properly."
      },
      {
        type: "text",
        text: "In general, when we need an object, the JVM first reads the reference from the stack to find the actual object in the heap. This is slower than accessing stack memory directly because the heap is larger and accessed indirectly.\n\nWhy stack is faster: Stack memory is small and frequently used, so the values stored in the stack have a higher chance of being kept in the CPU cache, making access faster.\n\nNow that you have an idea of how primitive values and objects are stored, let’s dig deeper into JVM memory.\n\nThe JVM memory has 5 main areas and looks like this:"
      },
      {
        type: "image",
        image: {
          src: "/jvm_layout.webp",
          alt: "JVM architecture"
        }
      },
      {
        type: "text",
        text: "Method Area:\n\nThe method area is one of the most interesting areas in memory, at least to me.\n\n-- It stores class data such as class variables, the constant pool, class structures, method bytecode, and interfaces.\n\n-- Previously, in Java versions before 8, it was called PermGen (Permanent Generation), was part of the heap, and was not garbage collected.\n\n-- In Java 8 and later, it is called Metaspace, is part of native memory, and is garbage collected when classes are unloaded.\n\n-- Each method area is created per JVM and is shared by all threads."
      },
      {
        type: "text",
        text: "Now let’s see what method area stores in depth,\n\n1. Class Variables\n\nClass variables are declared with the static keyword in a class."
      },
      {
        type: "code",
        language: "java",
        code: "class Student {\n    static int count = 0;\n    String name;\n}"
      },
      {
        type: "text",
        text: "count lives in the method area, and only one copy exists for the class and name is stored in the heap for each object separately.\n\n2. Constant Pool\n\nThe constant pool stores constants and reusable literals. Instead of creating multiple copies of the same literal, Java keeps a single copy in the constant pool and reuses it.\n\nThere are two types of constant pools:\n\n(a) String Constant Pool\n\nA special memory area inside the heap for storing string objects."
      },
      {
        type: "code",
        language: "java",
        code: "String s1 = \"Hello\";\nString s2 = \"Hello\";"
      },
      {
        type: "text",
        text: "Here both s1 and s2 points to the same literal in the String Constant Pool.\n\nIf we create a string using new String(\"Hello\"), a new object is created outside the string constant pool.\n\n(b) Runtime Constant Pool\n\nStores string literals, primitive constants, and symbolic references (method names, class names, field names) used in a class. Each class file has its own runtime constant pool, and the JVM uses it when the class is loaded.\n\n(i) Primitive constant"
      },
      {
        type: "code",
        language: "java",
        code: "public class Demo {\n     int x = 10; // '10' is stored in the runtime constant pool\n}"
      },
      {
        type: "text",
        text: "(ii) References to Methods"
      },
      {
        type: "code",
        language: "java",
        code: "public class Demo {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        int len = s.length();\n    }\n}"
      },
      {
        type: "text",
        text: "The method length() is not hardcoded in machine language. The runtime constant pool stores a reference after compilation."
      },
      {
        type: "code",
        code: "Method java/lang/String.length:()I"
      },
      {
        type: "text",
        text: "This means: Method length of class String takes no parameters (), returns an int I\n\nJVM resolves this reference at runtime using dynamic linking.\n\n(iii) Reference to Classes"
      },
      {
        type: "code",
        language: "java",
        code: "public class Demo {\n    String s = \"Hello\";\n}"
      },
      {
        type: "text",
        text: "The runtime constant pool stores the class reference as,"
      },
      {
        type: "code",
        code: "class java/lang/String"
      },
      {
        type: "text",
        text: "Here \"Hello\" is stored in the string constant pool. If the same literal is present in the pool, Java reuses it instead of creating a new object, which helps save memory and improves performance.\n\nNote: At compile-time, no objects are created in Java; object creation happens only at runtime.\n\n(iv) Reference to Fields"
      },
      {
        type: "code",
        language: "java",
        code: "class Person {\n    String name = \"Hello\";\n}\n\npublic class Demo {\n    public static void main(String[] args) {\n        Person p = new Person();\n        System.out.println(p.name);\n    }\n}"
      },
      {
        type: "text",
        text: "The constant pool will contain:"
      },
      {
        type: "code",
        code: "Field Person.name:Ljava/lang/String;"
      },
      {
        type: "text",
        text: "This means: In class Person, the field name is of type String.\n\n3. Class Structures\n\n-- Contains the class name (e.g., Student)\n\n-- Parent class (e.g., Object)\n\n-- Implemented interfaces\n\n-- Method names and their return types\n\n-- Field names and types (both static and non-static)\n\n-- Access modifiers (public, private, protected)\n\n-- Constant pool references"
      },
      {
        type: "text",
        text: "4. Method bytecode\n\nEvery method written in Java is compiled into bytecode\n\n5. Interfaces\n\nStores the interface names and method signatures of each interface\n\nHeap Area:\n\n-- In Java, the heap is where objects, their instances, and primitive arrays (like String[], int[]) are stored."
      },
      {
        type: "text",
        text: "-- Any object created using new is stored in the heap, which is the only way to create objects and arrays.\n\n-- Garbage Collector (GC) automatically reclaims memory occupied by objects that are no longer reachable from any thread.\n\n-- Each JVM has its own heap.\n\n-- Thread Safety: Objects stored in the heap can be accessed by multiple threads simultaneously. This can lead to race conditions, so extra care, such as using synchronized blocks or locks, is needed to manage concurrent access safely.\n\nStack Area:"
      },
      {
        type: "text",
        text: "-- In Java, the stack stores method execution data, including local variables, return addresses, and method arguments.\n\n-- Each thread has its own stack, and whenever a method is called, a stack frame is created for it within the thread’s stack.\n\n-- Each stack frame contains three main parts:\n\n-- Local Variable Area (LVA), which holds the method’s local variables and parameters.\n\n-- Operand Stack (OS), which temporarily stores operands and computation results during method execution.\n\n-- Frame Data (FD), which keeps metadata such as the return address and other housekeeping information."
      },
      {
        type: "text",
        text: "-- When the method finishes execution, its stack frame is removed following the LIFO (Last In, First Out) principle, ensuring efficient management of method calls and local data.\n\n-- Thread safety: Primitive variables stored in the stack are automatically thread-safe, because each thread works with its own copy. No synchronization is needed.\n\nProgram Register:"
      },
      {
        type: "text",
        text: "-- The Program Counter (PC) register tells the JVM which instruction in the current method should execute next.\n\n-- Each thread has its own PC register, which stores the address (or offset) of the next JVM bytecode instruction that the thread needs to execute.\n\n-- For native methods, the value of the PC register is undefined."
      },
      {
        type: "image",
        image: {
          src: "/pc_registers.webp",
          alt: "PC registers"
        }
      },
      {
        type: "text",
        text: "Native Memory Stack:\n\nEach thread in Java also has its own native method stack, in addition to the JVM stack.\n\nNormally, Java code runs inside the JVM, but sometimes we need to run code written in another language, like C or C++, often for performance reasons or to access operating system or hardware-level features.\n\nThis kind of code is called native code, and Java interacts with it using the Java Native Interface (JNI)."
      },
      {
        type: "code",
        language: "java",
        code: "public class Demo {\n    public static void main(String[] args) {\n        System.loadLibrary(\"nativeLib\"); // Loads the C++ library\n        nativeMethod();\n    }\n\n    public static native void nativeMethod(); // Declared in Java, implemented in C++\n}"
      },
      {
        type: "text",
        text: "Here, the method nativeMethod() is declared in Java but does not have a Java implementation—the actual code is written in C or C++.\n\nHow it works internally:\n\n-- Java code runs normally in the JVM\n\n-- When a native method is called, the JVM transfers execution to the native method stack.\n\n-- Inside this native stack, C/C++ functions get their own call frames, local variables, and execution context (just like Java methods do in the JVM stack).\n\n-- Once the native function finishes execution, control returns to the JVM stack, and Java execution continues."
      },
      {
        type: "text",
        text: "Ahh, what a long ride that was! We jumped into heaps, stacks, registers, and even dragged poor C and C++ along for the show.\n\nBut here’s the twist: once you actually write and run the Java code, it all feels so simple that you wonder why you even stressed in the first place.\n\nClassic Java, making things look harder than they are! Now go celebrate, you officially survived JVM memory land without losing your sanity."
      }
    ],
  },
  {
    slug: "execution-context-js-mastery",
    title: "JavaScript's Secret Theater: Execution Context & Call Stack Explained",
    preview: "Whether you're new or experienced, Execution Context is something you must understand to truly know how JavaScript works. Let's pull back the curtain.",
    date: "May 10, 2026",
    readTime: "6 min",
    tags: ["JavaScript", "Frontend"],
    featured: false,
    coverImage: {
      src: "/execution_context.webp",
      alt: "Javascript thing!",
    },
    contentBlocks: [
      {
        type: "text",
        text: "When we start learning JavaScript, there’s a middle stage where things can get confusing, such as how variables behave etc. Whether you’re new or experienced, Execution Context is something you must understand to truly know how JavaScript works.",
      },
      {
        type: "text",
        text: "Before that, let’s go through some basics. JavaScript is loosely typed.",
      },
      {
        type: "code",
        language: "javascript",
        code: "let x = 5;",
      },
      {
        type: "text",
        text: "In this example, x can be assigned any type, such as a number, string, etc. In the background, the JavaScript engine automatically determines the type of the variable x at runtime. In contrast, Java requires the type to be predefined.",
      },
      {
        type: "code",
        language: "java",
        code: "int y = 10;",
      },
      {
        type: "text",
        text: "JavaScript is a synchronous and single-threaded language.\n\nWhy? JavaScript was designed to be single-threaded in web browsers to simplify DOM manipulation and avoid concurrency issues, such as multiple threads trying to modify the same elements at the same time.",
      },
      {
        type: "text",
        text: "-- Single-threaded means each and every line will be executed one at a time, in order.\n\n-- Synchronous means the next line will be executed only after the current line has finished executing.\n\nNow, let’s dive into the Execution Context.\n\nWhenever JavaScript code runs, it creates a Global Execution Context, which is like a big box with two main parts:"
      },
      {
        type: "image",
        image: {
          src: "/execution_environment.webp",
          alt: "Execution context memory layout"
        }
      },
      {
        type: "text",
        text: "Memory Component (Variable Environment): This is where variables and functions are stored as key-value pairs.\n\nCode Component (Thread of Execution): This is where the code runs line by line. It executes the logic using the values stored in memory.\n\nNow, let’s dive deep with an example,"
      },
      {
        type: "code",
        language: "javascript",
        code: "var n = 10;\nfunction square(num) {\n  var ans = num * num;\n  return ans;\n}\nvar square2 = square(4);\nvar square4 = square(n);"
      },
      {
        type: "text",
        text: "When we run this code, as I said earlier, a Global Execution Context (GEC) will be created."
      },
      {
        type: "image",
        image: {
          src: "/phase1.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "Phase 1: Memory Allocation Phase\n\nIn the Global Execution Context:\n\n-- n is assigned undefined.\n\n-- For functions, everything inside the curly braces is stored as a value.\n\n-- Variables square2 and square4 are also initially assigned undefined.\n\nIn JavaScript, undefined is used as a placeholder until actual values are assigned."
      },
      {
        type: "image",
        image: {
          src: "/phase2.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "Phase 2: Code Execution Phase\n\n-- When it hits the first line, 10 is assigned to n.\n\n-- The second line is a function declaration, so it’s skipped during execution.\n\n-- On the third line, the function square(4) is invoked. At this point, a new Function Execution Context is created."
      },
      {
        type: "image",
        image: {
          src: "/phase_combined.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "This new Execution Context also goes through the same two phases:\n\n-- In the Memory Phase, memory is allocated for the parameter num and the variable ans.\n\n-- In the Execution Phase, num * num is calculated and stored in ans.\n\n-- When the return statement is hit, the result is returned to where the function was called, and assigned to square2."
      },
      {
        type: "image",
        image: {
          src: "/code_environment.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "Once the control is returned tosquare2, the Execution Context for that function invocation is deleted."
      },
      {
        type: "code",
        language: "javascript",
        code: "var n = 10;\nfunction square(num) {\n  var ans = num * num;\n  return ans;\n}\nvar square2 = square(4);\nvar square4 = square(n);"
      },
      {
        type: "image",
        image: {
          src: "/code_env_2.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "On the next line, another function is invoked: square(n). This creates a new Execution Context, and the same process is followed."
      },
      {
        type: "image",
        image: {
          src: "/code_env_3.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "After the process is completed, the result is assigned to square4, that function's Execution Context is also deleted.\n\nFinally, when the JavaScript code finishes executing, the Global Execution Context itself is also deleted.\n\nNow, let’s discuss a case where things can get nested.\n\nIf there are many function invocations or nested function calls, the Execution Contexts become deeper and stack up.\n\nTo handle this, JavaScript uses the Call Stack.\n\nThe Call Stack keeps track of the order of Execution Contexts."
      },
      {
        type: "image",
        image: {
          src: "/call_stack.webp",
          alt: "Execution deep dive"
        }
      },
      {
        type: "text",
        text: "Once the JavaScript code finishes running, the Global Execution Context is popped from the Call Stack.\n\nThere are many fancy names for the Call Stack, like Execution Context Stack, Program Stack, Control Stack, Runtime Stack, or Machine Stack.\n\nBut don’t get confused by all these terms. Just remember it as the Call Stack, and that’s it!\n\nSo, this is an in-depth article that most developers might not know about.\n\nBy understanding this, you’ll feel more confident, and maybe even start falling in love with JavaScript ❤️."
      }
    ],
  },
];
