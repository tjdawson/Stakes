var manualSendResults = "true";

//var shuffleSequence = seq("trial_template","sr","end");

var shuffleSequence = seq("consent","instructions",
                          "train_F","train_M",
                          "control_why","control_what","control_how","control_when",
                                   "high_1","high_2","high_3","high_4","high_5",
                                   "low_1","low_2","low_3","low_4","low_5",
                                   "sr","end");

var items = [
    // controller to send results early
        ["sr", "__SendResults__", { }],
    //instructions, consent, training, and end display
        ["instructions", "Form", { html: {include: "instructions.html" } } ],
        ["consent", "Form", { html: {include: "consent.html" }, hideProgressBar: true, countsForProgressBar: false} ],
        ["train_F", "Form", { html: {include: "train_F.html" } } ],
        ["train_M", "Form", { html: {include: "train_M.html" } } ],    
        ["end", "Form", { html: {include: "end.html" }, countsForProgressBar: false, continueMessage: null} ],
    // trials
        ["high_1", "Form", { html: {include: "high_1.html" } } ],
        ["high_2", "Form", { html: {include: "high_2.html" } } ],
        ["high_3", "Form", { html: {include: "high_3.html" } } ],
        ["high_4", "Form", { html: {include: "high_4.html" } } ],
        ["high_5", "Form", { html: {include: "high_5.html" } } ],
        ["low_1", "Form", { html: {include: "low_1.html" } } ],
        ["low_2", "Form", { html: {include: "low_2.html" } } ],
        ["low_3", "Form", { html: {include: "low_3.html" } } ],
        ["low_4", "Form", { html: {include: "low_4.html" } } ],
        ["low_5", "Form", { html: {include: "low_5.html" } } ],
    // controls
        ["control_why", "Form", { html: {include: "control_why.html" } } ],
        ["control_what", "Form", { html: {include: "control_what.html" } } ],
        ["control_when", "Form", { html: {include: "control_when.html" } } ],
        ["control_how", "Form", { html: {include: "control_how.html" } } ],

];

var defaults = [
    // save reaction time for each Form controller
    "Form", {saveReactionTime: "true"}
];

