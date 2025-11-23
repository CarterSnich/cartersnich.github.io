<script setup lang="ts"></script>

<template>
  <main>
    <h1>BasicCSS</h1>
    <p>
      This is the style used on this website, inspired by
      <a href="https://watercss.kognise.dev/">Water.css</a>. Below are the demo
      of some elements.
    </p>

    <h2 id="form-elements">Form elements</h2>
    <form>
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@gmail.com" />
      <label for="id">User id (read only)</label>
      <input readonly name="id" id="id" value="04D6H89Z" />
      <label for="disabled">Random disabled input</label>
      <input
        disabled
        name="disabled"
        id="disabled"
        placeholder="Because why not?" />
      <label for="about">About me</label>
      <textarea
        name="about"
        id="about"
        placeholder="I am a textarea..."></textarea>
      <label>Choose an item:</label>
      <div class="radio">
        <input type="radio" id="item1" name="radio" value="item1" checked />
        <label for="item1">Item 1</label>
      </div>
      <div class="radio">
        <input type="radio" id="item2" name="radio" value="item2" />
        <label for="item2">Item 2</label>
      </div>
      <div class="radio">
        <input type="radio" id="item3" name="radio" value="item3" />
        <label for="item3">Item 3</label>
      </div>
      <br />
      <div class="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" checked />
        <label for="checkbox">Remember me</label>
      </div>
      <button type="submit" value="Submit">Submit</button>
      <button type="reset" value="Reset">Reset</button>
    </form>

    <h2 id="code">Code</h2>
    <p>
      Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. Did you know,
      <code>alert(1)</code> can show an alert in JavaScript!
    </p>
    <pre><code>// This logs a message to the console and check out the scrollbar.<br>console.log('Hello, world!')</code></pre>

    <h2 id="other">Other</h2>
    <p>
      Here's a horizontal rule and image because I don't know where else to put
      them.
    </p>
    <img src="https://lipsum.app/random/640x480" alt="random image" />
    <hr />
    <p>And here's a nicely marked up table!</p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Godzilla</td>
          <td>2</td>
          <td>$299.99</td>
        </tr>
        <tr>
          <td>Mozilla</td>
          <td>10</td>
          <td>$100,000.00</td>
        </tr>
        <tr>
          <td>Quesadilla</td>
          <td>1</td>
          <td>$2.22</td>
        </tr>
      </tbody>
    </table>
    <details>
      <summary>Some summary/details can't hurt!</summary>
      <p>Lorem ipsum dolor sit blah blah.</p>
    </details>
    <p>The dialog (form, and menu) tag</p>
    <div>
      <button type="button" id="dialog-trigger">Show me the dialog!</button>
      <span id="dialog-result"></span>
    </div>
    <dialog id="dialog">
      <header>This is a sample dialog</header>
      <form method="dialog">
        <p>What is your favorite pet animal?</p>
        <menu>
          <button value="feline">Cats</button>
          <button value="canine">Dogs</button>
          <button value="other">Others</button>
        </menu>
      </form>
    </dialog>
    <h3 id="typography">Typography</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum
      hendrerit velit, quis ullamcorper sem congue ac. Quisque id magna rhoncus,
      sodales massa vel, vestibulum elit. Duis ornare accumsan egestas. Proin
      maximus lacus interdum leo molestie convallis. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut
      iaculis risus eu felis feugiat, eu mollis neque elementum. Donec interdum,
      nisl id dignissim iaculis, felis dui aliquet dui, non fermentum velit
      lectus ac quam. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos.
      <strong>This is strong,</strong> this is normal,
      <b>this is just bold,</b> <em>and this is emphasized!</em> And heck,
      <a href="/">here</a>'s a link.
    </p>
    <blockquote
      cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
      "The HTML blockquote Element (or HTML Block Quotation Element) indicates
      that the enclosed text is an extended quotation. Usually, this is rendered
      visually by indentation (see
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Usage_notes"
        >Notes</a
      >
      for how to change it). A URL for the source of the quotation may be given
      using the <code>cite</code> attribute, while a text representation of the
      source can be given using the <code>&lt;cite&gt;</code> cite element."
      <footer><cite>MDN, "The Block Quotation element"</cite></footer>
    </blockquote>
    <ul>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
    </ul>
    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
      <li>Ordered list item 3</li>
    </ol>
    <p>Addresses are also styled to be <strong>awesome</strong>!</p>
    <address>
      <a href="mailto:john.doe@example.com">john.doe@example.com</a><br />
      <a href="tel:778-330-2389">778-330-2389</a><br />
      <a href="sms:666-666-6666">666-666-6666</a><br />
    </address>
    <br />
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <footer><a href="#">Back to top ⬆</a></footer>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: auto;
}

.radio,
.checkbox {
  --size: 20px;

  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;

  input[type="radio"],
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    height: var(--size);
    width: var(--size);
    position: relative;
  }

  input[type="radio"]::after,
  input[type="checkbox"]::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input[type="radio"]:checked::after {
    background-color: white;
    height: 10px;
    width: 10px;
  }

  input[type="checkbox"]:checked::after {
    content: "";
  }
}

table {
}
</style>
