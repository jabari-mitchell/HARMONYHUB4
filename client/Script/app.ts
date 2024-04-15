// "use strict";

// (() => {

//     /**
//      * Binds click, mouseover , and mouseout events to anchor tags with class 'link' and a matching
//      * data attribute. Applies CSS changes for visual feedback and handles link activation on click
//      * @param link
//      */
//     function AddLinkEvents(link:string):void{
//         let linkQuery = $(a.link[data=${link}]);
//         //Removes all link events from the event queue
//         linkQuery.off("click");
//         linkQuery.off("mouseover");
//         linkQuery.off("mouseout");

//         linkQuery.css("text-decoration","underline");
//         linkQuery.css("color","blue");

//         linkQuery.on("click",function (){
//             LoadLink(${link});
//         });

//         linkQuery.on("click",function (){
//             $(this).css("cursor","pointer");
//             $(this).css("font-weight","bold");
//         });

//         linkQuery.on("mouseout", function (){
//             $(this).css("font-weight","normal");
//         });



//     }


//     /**
//      * Sets up event listeners for navigation links found within list items or the unordered list
//      * Removes any existing clicks and mouseover events before re-establishing new ones to control
//      * navigation behaviour and visual cues.
//      * @constructor
//      */
//     function AddNavigationEvents():void{
//         let navLinksExtra = $(".navbar-brand");
//         let navlinks = $("ul>li>a");

//         navLinksExtra.off("click");
//         navLinksExtra.off("mouseover");

//         navlinks.off("click");
//         navlinks.off("mouseover");

//         navlinks.on("click",function(){
//             LoadLink($(this).attr("data") as string);
//         });

//         navLinksExtra.on("click",function(){
//             LoadLink($(this).attr("data") as string);
//         });

//         navlinks.on("mouseover",function(){
//             $(this).css("cursor","pointer")
//         });

//         navLinksExtra.on("mouseover",function(){
//             $(this).css("cursor","pointer")
//         });

//     }

//     /**
//      * Updates the application current active link,manages authentication and updates browser history
//      * It also updates the navigation UI to reflect the current active link and loads the corresponding content
//      * @param link
//      * @param data
//      * @constructor
//      */
//     function LoadLink(link:string, data:string = ""):void{

//         router.ActiveLink = link;

//         AuthGuard();

//         router.LinkData = data;

//         history.pushState({},"",router.ActiveLink);

//         document.title = CapitalizeFirstCharacter(router.ActiveLink);

//         $("ul>li>a").each(function(){
//             $(this).removeClass("active");
//         });

//         $(".navbar-brand").each(function(){
//             $(this).removeClass("active");
//         });

//         $("li>a:contains(${document.title})").addClass("active");

//         LoadContent();


//     }

//     function AuthGuard(){
//         let protected_routes = ["contact-list"];

//         if(protected_routes.indexOf(router.ActiveLink) >- 1) {

//             if (!sessionStorage.getItem("user")) {
//                 router.ActiveLink = "login";
//             }
//         }
//     }

//     function CheckLogin() {
//         if (sessionStorage.getItem("user")) {
//             $("#login").html(`<a id="logout" class="nav-link" href="#">
//             <i class="fas fa-undo"></i> Logout</a>`);
//         }

//         $("#logout").on("click", function () {
//             sessionStorage.clear();
//             $("#login").html(`<a class="nav-link" href="#"
//             data="login"><i class="fas fa-sign-in-alt"></i> Login</a>`);
//             LoadHeader();
//             LoadLink("home");
//         });

//     }

//     function ActiveLinkCallback():Function{
//         switch(router.ActiveLink){

//             case "login": return DisplayLoginPage;
//             case "Feedback": return displayContactUs;
//             case "EventList": return Eventlistpage;
//             case "contact-list": return contactlistpage;
//             default:
//                 console.error("ERROR: callback function does not exist " + router.ActiveLink);
//                 return new Function();
//         }
//     }

//     function CapitalizeFirstCharacter(str:string){
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }

//     function LoadHeader(){

//         $.get("./views/components/header.html", function(html_data)
//         {
//             $("header").html(html_data);
//             document.title = CapitalizeFirstCharacter(router.ActiveLink);

//             $(li>a:contains(${document.title})).addClass("active").attr("aria-current","page");

//             AddNavigationEvents();
//             CheckLogin();
//         });
//     }

//     function LoadContent(){
//         let page_name = router.ActiveLink;
//         let callback = ActiveLinkCallback();

//         $.get(./views/content/${page_name}.html,function(html_data){
//             $("main").html(html_data);
//             CheckLogin();
//             callback();
//         });
//     }

//     function LoadFooter(){
//         $.get("./views/components/footer.html", function(html_data){
//             $("footer").html(html_data);
//         });
//     }

//     function Start(){
//         console.log("App Started...");

//         LoadHeader();
//         LoadLink("home");
//         LoadFooter();



//     }


//     function checkLogin(): void {
//         const user = sessionStorage.getItem("user");
//         const loginLink = document.getElementById("login") as HTMLElement;
//         if (user) {
//             loginLink.innerHTML = '<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>';
//             loginLink.onclick = () => {
//                 sessionStorage.clear();
//                 location.href = "index.ejs";
//             };
//         } else {
//             loginLink.innerHTML = '<a class="nav-link" href="login.ejs"><i class="fas fa-sign-in-alt"></i> Login</a>';
//         }
//     }


//     function DisplayLoginPage(): void {
//         console.log("Called DisplayLogin()...");
//         $("#loginButton").on("click", () => {
//             let username = $("#username").val() as string;
//             let password = $("#password").val() as string;
//             let success = false;
//             $.get("./Data/users.json", (data) => {
//                 data.users.forEach((user: any) => {
//                     if (username === user.Username && password === user.Password) {
//                         let userObj = {
//                             DisplayName: user.DisplayName,
//                             EmailAddress: user.EmailAddress,
//                             Username: user.Username,
//                             Password: user.Password
//                         };
//                         sessionStorage.setItem("user", JSON.stringify(userObj));
//                         success = true;
//                     }
//                 });
//                 if (success) {
//                     $("#messageArea").removeClass("alert alert-danger").hide();
//                     location.href = "feedbacklist.ejs";
//                     LoadLink("contact-list");
//                 } else {
//                     $("#username").trigger("focus").trigger("select");
//                     $("#messageArea").addClass("alert alert-danger").text("Error: Invalid Credentials").show();
//                 }
//             });
//         });
//         $("#cancelButton").on("click", () => {
//             document.forms[0].reset();
//             location.href = "index.ejs";
//         });
//     }

//     function contactFormValidation(): boolean {
//         let isValid = true;
//         let fullNameValid = /^([A-Z][a-z]{1,3}\.?\s)?([A-Z][a-z]+)+([\s,-]([A-z][a-z]+))*$/.test($("#fullName").val() as string);
//         let contactNumberValid = /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/.test($("#contactNumber").val() as string);
//         let emailAddressValid = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test($("#emailAddress").val() as string);

//         if (!fullNameValid) {
//             $("#messageArea").addClass("alert alert-danger").text("Please enter a valid First and Last name!").show();
//             isValid = false;
//         } else if (!contactNumberValid) {
//             $("#messageArea").addClass("alert alert-danger").text("Please enter a valid Contact number!").show();
//             isValid = false;
//         } else if (!emailAddressValid) {
//             $("#messageArea").addClass("alert alert-danger").text("Please enter a valid Email address!").show();
//             isValid = false;
//         }
//         return isValid;
//     }

//     function displayContactUs(): void {
//         console.log("Called displayContactUs");
//         $("#sendButton").click((event) => {
//             event.preventDefault();
//             if (!contactFormValidation()) {
//                 console.log("Form validation failed.");
//                 return;
//             }
//             console.log("Form validation passed.");
//             let formData = {
//                 fullName: $("#fullName").val(),
//                 contactNumber: $("#contactNumber").val(),
//                 emailAddress: $("#emailAddress").val(),
//                 message: $("#message").val()
//             };
//             let feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
//             feedbacks.push(formData);
//             localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
//             console.log("Feedback added:", formData.fullName, formData.contactNumber, formData.emailAddress, formData.message);
//             alert("Thank you for your feedback!");
//             $("#fullName").val('');
//             $("#contactNumber").val('');
//             $("#emailAddress").val('');
//             $("#message").val('');
//             location.href = "feedbacklist.ejs";
//         });
//     }

//     $("#submitButton").click((event) => {
//         event.preventDefault();
//         console.log("Form validation passed.");
//         let formData = {
//             name: $("#EventName").val(),
//             address: $("#contactNumberEvent").val(),
//             emailAddress: $("#emailAddressEvent").val(),
//             description: $("#EventDescription").val()
//         };
//         let feedbacks = JSON.parse(localStorage.getItem("Events") || "[]");
//         feedbacks.push(formData);
//         localStorage.setItem("Events", JSON.stringify(feedbacks));
//         console.log("Event added:", formData.name, formData.address, formData.emailAddress, formData.description);
//         $("#EventName").val('');
//         $("#contactNumberEvent").val('');
//         $("#emailAddressEvent").val('');
//         $("#EventDescription").val('');
//         window.location.href = "Eventslist.html";
//     });

//     function contactlistpage(): void {
//         let feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
//         if (feedbacks.length > 0) {
//             let data = feedbacks.map((feedback: any, index: number) => `<tr>
//                 <td class="text-center">${index + 1}</td>
//                 <td>${feedback.fullName}</td>
//                 <td>${feedback.contactNumber}</td>
//                 <td>${feedback.emailAddress}</td>
//                 <td>${feedback.message}</td>
//             </tr>`).join('');
//             document.getElementById("contactlist")!.innerHTML = data;
//         }
//     }

//     function Eventlistpage(): void {
//         let feedbacks = JSON.parse(localStorage.getItem("Events") || "[]");
//         if (feedbacks.length > 0) {
//             let data = feedbacks.map((feedback: any, index: number) => `<tr>
//                 <td class="text-center">${index + 1}</td>
//                 <td>${feedback.name}</td>
//                 <td>${feedback.address}</td>
//                 <td>${feedback.emailAddress}</td>
//                 <td>${feedback.description}</td>
//             </tr>`).join('');
//             document.getElementById("Eventlist")!.innerHTML = data;
//         }
//     }

//     function displayWelcomeMessage(): void {
//         if (document.title === "Contact List") {
//             if (!sessionStorage.getItem("welcomeMessageShown")) {
//                 let user = JSON.parse(sessionStorage.getItem("user") || "{}");
//                 if (user && user.DisplayName) {
//                     let welcomeMessage = Welcome, ${user.DisplayName}!;
//                     $("main.container").prepend(<div class='alert alert-success' id='welcomeMessage'>${welcomeMessage}</div>);
//                     sessionStorage.setItem("welcomeMessageShown", "true");
//                     setTimeout(() => {
//                         $("#welcomeMessage").fadeOut();
//                     }, 5000);
//                 }
//             }
//         }
//     }



//     window.addEventListener("load", Start)
// })();
"use strict";

(() => {
    function CheckLogin(): void {
        const user = sessionStorage.getItem("user");
        if (user) {
            const logoutButton = document.getElementById("logout") as HTMLElement;
            logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
            logoutButton.onclick = () => {
                sessionStorage.clear();
                location.href = "/";
            };
        } else {
            const loginButton = document.getElementById("login") as HTMLElement;
            loginButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            loginButton.onclick = () => {
                location.href = "/login";
            };
        }
    }

    function AuthGuard(): void {
        const path = location.pathname;
        const protectedRoutes = ["/contact-list", "/edit"];
        if (protectedRoutes.includes(path) && !sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }

    function DisplayHomePage(): void {
        console.log("Displaying Home Page...");
        // Logic to display home page content
    }

    function DisplayEditPage(): void {
        const pageId = location.hash.substring(1);
        console.log("Editing Page ID:", pageId);
        // Logic to display edit page content
    }

    function Start(): void {
        console.log("App Started...");
        const pageID = document.body.getAttribute("id");
        switch (pageID) {
            case "home":
                DisplayHomePage();
                break;
            case "edit":
                DisplayEditPage();
                break;
            default:
                console.error("ERROR: Unknown page ID " + pageID);
        }
        CheckLogin();
        AuthGuard();
    }

    window.addEventListener("load", Start);

    // catch 404 and forward to error handler
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(createError(404));
    });

    interface UserDoc extends Document {
        username: string;
        email: string;
        password: string;
    }

    const UserSchema = new Schema<UserDoc>({
        username: String,
        email: String,
        password: String
    });

    const User: Model<UserDoc> = mongoose.model('User', UserSchema);

// Middleware
    app.use(express.json());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    }));

// Registration
    app.post('/register', async (req: Request, res: Response) => {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await User.create({ username, email, password: hashedPassword });
            res.status(201).send(user);
        } catch (err) {
            res.status(400).send(err.message);
        }
    });

// Login
    app.post('/login', async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send('Invalid username or password');
        }
        req.session.userId = user._id;
        res.send('Logged in successfully');
    });

// Authentication middleware
    const requireAuth = (req: Request, res: Response, next: Function) => {
        if (!req.session.userId) {
            return res.redirect('/login');
        }
        next();
    };

// Get all users
    app.get('/users', requireAuth, async (req: Request, res: Response) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).send('Error fetching users');
        }
    });

// Get user by ID
    app.get('/users/:id', requireAuth, async (req: Request, res: Response) => {
        const userId = req.params.id;
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).send('Error fetching user');
        }
    });

// Update user
    app.put('/users/:id', requireAuth, async (req: Request, res: Response) => {
        const userId = req.params.id;
        const { username, email, password } = req.body;
        try {
            const user = await User.findByIdAndUpdate(userId, { username, email, password });
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).send('User updated successfully');
        } catch (err) {
            res.status(500).send('Error updating user');
        }
    });

// Delete user
    app.delete('/users/:id', requireAuth, async (req: Request, res: Response) => {
        const userId = req.params.id;
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).send('User deleted successfully');
        } catch (err) {
            res.status(500).send('Error deleting user');
        }
    });

// error handler
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
    // Create an event
    router.post('/events', async (req: Request, res: Response) => {
        try {
            const { name, description, date } = req.body;
            const event = await Event.create({ name, description, date });
            res.status(201).json(event);
        } catch (error) {
            // @ts-ignore
            res.status(400).json({ message: error.message });
        }
    });

// Get all events
    router.get('/events', async (req: Request, res: Response) => {
        try {
            const events = await Event.find();
            res.json(events);
        } catch (error) {
            // @ts-ignore
            res.status(500).json({ message: error.message });
        }
    });

// Get a single event
// @ts-ignore
    router.get('/events/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const event = await Event.findById(id);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(event);
        } catch (error) {
            // @ts-ignore
            res.status(500).json({ message: error.message });
        }
    });

// Update an event
// @ts-ignore
    router.put('/events/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json(event);
        } catch (error) {
            // @ts-ignore
            res.status(500).json({ message: error.message });
        }
    });

// Delete an event
// @ts-ignore
    router.delete('/events/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
            const event = await Event.findByIdAndDelete(id);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            // @ts-ignore
            res.status(500).json({ message: error.message });
        }
    });
})();