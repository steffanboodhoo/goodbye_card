# goodbye_card

## Rules and Considerations

### Code Rules
#### HTML Structure
**index.html**,
In the `<body>` there is a div, `<div id='content'>`, each person will create their own div with the id attribute set to firstname_lastname and a class person_section. As an example please consider the following
```html
<div id='content'>
    <!-- Steffan Boodhoo -->
    <div id='steffan_boodhoo' class='person_section'>
        <!-- Steffan Boodhoos here -->
    </div>

    <!-- Someone Else -->
    <div id='firstname_lastname' class='person_section'>
        <!-- Someone Else's content here -->
    </div>
</div>
```
This way if someone decides to someone decides to write some javascript to dynamically create some meta content (e.g. a side nav) they can easily query the the DOM to get relevant sections and references. 

Please prefix id's with your firstname and lastname to avoid anyone else from manipulating them erroneously in their javascript, illustration
```html
<div id='steffan_boodhoo' class='person_section'>
    <button id='steffanboodhoo_example'>Click</button>
 </div>
```

#### Javascript Structure 
**index.js**,
To prevent pollution of other people's scope keep all your javascript within a function with your name, illustration
```
const steffan_boodhoo_init = () => {
    console.log('I can still access the DOM, don\'t worry')
}
```
Then call your function in the window.onload, so the entire thing should look like this
```javascript
window.onload = () => {
    steffan_boodhoo_init();
    other_person_init();
}

const steffan_boodhoo_init = () => {
    console.log('I can still access the DOM, don\'t worry')
}

const other_person_init = () => {
    console.log('I can still access the DOM, don\'t worry')
}
```
DO NOT write custom code to manipulate any ids/classes that YOU did not assign, UNLESS given permission to by another user. This ALSO goes for any classes created/used by the libraries loaded. Two people may be using the same class from a lib to decorate/add functionality to their content.

If adding any extra libraries please be mindful of size and conflicts

### CSS structure
In keeping with being mindful of other persons' content and manipulation, I also ask that classes are prefixed with your firstname and lastname



## Content Considerations
### Content Length
Please be mindful of the length of your content, we would like to give everyone's voice visibility therefore, if you would like to include a lot of content please do so by hiding part of / majority of it (you can use whatever means you like e.g. modal, collapse etc )

### Testing your piece
Be sure that whatever you write does not interfere with other people's content, if you paste sample code PLEASE CHANGE DEFAULT IDs, check the console etc, just be considerate :)

### Your content is yours
Feel free to style your content however you like, it's your own expression :)

## Penalty

Lastly if you violate these rules, this means you can hamper or prevent persons from saying their goodbye and thanks. Given that we have ~1 day, for anyone who violates an ATTEMPT will be made to notify them and if not fixed before wednesday their content removed and they will be removed from the repo.

## Coordination
I encourage any hero to volunteer to add something to the overall site, create a site header, some navigation, meta content etc, however please update myself or Inzamam or Shiva or Nic

Again please feel free to coordinate with myself / Inzamam / Shiva / Nic ( I don't have everyone's contacts or not everyone may feel comfortable contacting me). 


