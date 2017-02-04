@ceejay15
11/19/2016


# angular_parent_child_method_calling
Sample of Parent calling child component's method


Description: This is just a demonstration on how Parent Component can call
Child's Component method using Angular2's @ViewChild. To know more about component
communication, you can follow their guide at angular.io at 
https://angular.io/docs/ts/latest/cookbook/component-communication

Problem:
1.) When user clicks a 'Launch A Form' button it should display tab two and also show 
a form as the content but it is not showing. User needs to trigger the child component's
method that handles click event before it showed the form.

Solution:
Must be able to call child method from parent and make the tab 2 appear along with its
content. Using @Viewchild making parent's component communicate to 
child component's method.

Expected flow of this plunker after solving the problem
1) Tab two must only be available when user clicks 'Launch A Form'
2) When user clicks 'Submit and Close' button on tab two's form, it will
unload the form and remove tab two from the screen.

NOTE:Code here is not the actual code and just a sample on how it solved my problem.
