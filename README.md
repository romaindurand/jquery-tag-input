# jquery-tag-input
JQuery plugin allowing to transform easily a text input into a hashtag/keyword input

[Demo](http://codepen.io/romaindurand/pen/dYqJRP)

##Prerequisite
- jquery

#Usage
`git clone`
```javascript
$('myTextInput').tagInput({
  prefix: '#',              //prefix for all tags. Default: ''
  focusOnParentClick: true  //give the parent element a text input behavior
                            //Default: false
});
```
