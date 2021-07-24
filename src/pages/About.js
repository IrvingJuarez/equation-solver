import "../styles/about.css"

const About = () => {
    const view = `
        <h2>What is a linear equation?</h2>
        <p>An equation having the maximum order of 1 is known as a Linear equation.
        <br>
        Below are some examples of linear equations in 1 variable, 2 variables and 3 variables:</p>
        <article>
            <h3>Linear equations in one variable</h3>
            <p>3x+5=0
            <br>
            32x+7=0
            <br>
            98x = 49</p>
            <h3>Linear equations in two variables</h3>
            <p>y+7x=3
            <br>
            3a+2b = 5
            <br>
            6x+9y-12=0</p>
            <h3>Linear equations in three variables</h3>
            <p>x + y + z = 0
            <br>
            a – 3b = c
            <br>
            3x + 12 y = ½ z</p>
        </article>
        <h2>How to solve linear equations?</h2>
        <p>There are many different linear equations, as well as many forms of these equations.
        <br>
        What it is important for us is learning how to solve linear equations. In this article it will be told how to solve linear equations in one variable.</p>
        <article>
            <h3>Solution of linear equation in one variable</h3>
            <p>Both sides of the equation are supposed to be balanced for solving a linear equation. 
            Equality sign denotes that the expressions on either side of the ‘equal to’ sign are equal. Since the equation is balanced, for solving it certain mathematical operations are performed on both sides of the equation in a manner that it does not affect the balance of the equation. Here is the example related to the linear equation in one variable.</p>
            <h3>Example: Solve (2x – 10)/2 = 3(x – 1)</h3>
            <h3>Step 1: Clear the fraction</h3>
            <p>x – 5 = 3(x – 1)</p>
            <h3>Step 2: Simplify Both sides of the equation</h3>
            <p>2x – 5 = 3x – 3
            <br>
            x = 3x + 2
            <br>
            x – 3x = 2
            </p>
            <h3>Step 3: Isolate X</h3>
            <p>-2x = 2
            <br>
            x = -1</p>
        </article>
        <h2>Why it is important to know how to solve linear equations?</h2>
        <p>Even when Equation Solver gives you the result of linear equations (so far), it is important to make sure you know what would be the result before to press the “Do the math” button</p>
    `;

    return view
}

export default About;