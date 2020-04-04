## Overall:

Why everything has Mr prefix? There are many small components. I would try to have more universal shared components through the feature components. For example buttons should be same through the application so it would make sense to have button component in the generic component folder. I might even avoid components that doesnt have any logic expect styles and just define in the parent file. MrRateStarts fall into this category. It might be worth to use react.context to avoid pasing props through many layers
I suggest to use eslint & prettier

**Style only components moved into parent components.**
**This is a small section of the overall app and will look a little different to the rest. For now I'll keep the structure the way it is but that may change as I build out the rest of the project.**
**I am using eslint and prettier, do I have it setup wrong?**

## MrButton.js

Do you really need disabled check in handleClick condition? Buttons tend to be disabled when disabled state is used. Why component is named a Button, but its actually an anchor? You can simple pass handleClick like this: onClick={handleClick} `buttonFunc(reverse); submitRoutine && submitRoutine();` Looks strange, instead I would define function in the parent component and just pass function reference to MrButton component. Not sure if you need to have hide property if you could just conditionaly render component like {hide && <MrButton /> }

**Moved the submit routine into buttonFunc and changed handleClick.**
**Hide prop is there as the button need to stay in the document flow for layout reasons.**

## MrProgress.js

no need to use ternary condition - you can just pass step === "rate"

**yep!**

## MrGratitude.js

even if you are hacking you should use ref instead of document.querySelect

**Ahh! Understanding refs much more now, Thanks!**

## MrRater.js

use map to render MrRateStar

**yep!**

## MrMainContent.js

Do you need to define key?
**nope! Not on the Div anyway. I do for the animations however.**
