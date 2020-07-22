/* 
exports a function based on every single action
we want to have. The type specifies which string it will
"fire off."

Can also take a parameter if you want to change something
that happens with the action (ie taking in a name and changing
the default name to the new one each time a type: "SETNAME" action
is triggered)
*/
export const increment = () => ({
    type: "INCREMENT"
});

export const decrement = () => ({
    type: "DECREMENT"
});

export const reset = () => ({
    type: "RESET"
});
