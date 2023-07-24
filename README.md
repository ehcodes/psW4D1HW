[](#classes-methods-and-properties)Classes Methods and Properties
=================================================================

### [](#hamster)Hamster

*   attributes:
    
    *   owner - string, initially set as an empty string
    *   name - string, set the name from parameter in constructor method
    *   price - integer, set as 15
*   methods:
    
    *   wheelRun() - log "squeak squeak"
    *   eatFood() - log "nibble nibble"
    *   getPrice() - return the price

### [](#person)Person

*   attributes:
    *   name - set name from parameter in constructor method
    *   age - initially 0
    *   height - initially 0
    *   weight - initially 0
    *   mood - integer starting at 0 initially
    *   hamsters - empty array initially
    *   bankAccount - initially set to 0

*   methods:
    *   getName() - returns name
    *   getAge() - returns age
    *   getWeight() - returns weight
    *   greet() - logs a message with person's name
    *   eat() - increment weight, increment mood
    *   exercise() - decrement weight
    *   ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
    *   buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

### [](#create-a-story-with-your-person-class)Create a Story with your Person class

Feel free to update or add methods to automate some of these tasks.

1.  Instantiate a new Person named Timmy
2.  Age Timmy five years
3.  At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
4.  Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
5.  Age Timmy 9 years
6.  Create a hamster named "Gus"
7.  Set Gus's owner to the string "Timmy"
8.  Have Timmy "buy" Gus
9.  Age Timmy 15 years
10.  Have Timmy eat twice
11.  Have Timmy exercise twice

[](#chef-make-dinners)Chef Make Dinners
---------------------------------------

    class Dinner {
    
    }
    
    class Chef {
    
    }

*   Chef should be a factory of Dinner
*   Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
*   Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
*   Have the Chef create 3 dinners, log the dinners
