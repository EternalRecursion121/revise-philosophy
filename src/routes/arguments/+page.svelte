<script lang="ts">
    import { initializeApp } from 'firebase/app';
    import { getDatabase, ref, onValue } from "firebase/database";


    const firebaseConfig = {
        databaseURL: "https://revise-philosophy-default-rtdb.europe-west1.firebasedatabase.app/"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const argumentsRef = ref(db, 'arguments');
    const termsRef = ref(db, 'terms');

    let _arguments = {}; 

    onValue(argumentsRef, (snapshot) => {
        _arguments = snapshot.val();
    });
</script>

<ul id="myUL">
  <li><span class="caret">Beverages</span>
    <ul class="nested">
      <li>Water</li>
      <li>Coffee</li>
      <li><span class="caret">Tea</span>
        <ul class="nested">
          <li>Black Tea</li>
          <li>White Tea</li>
          <li><span class="caret">Green Tea</span>
            <ul class="nested">
              <li>Sencha</li>
              <li>Gyokuro</li>
              <li>Matcha</li>
              <li>Pi Lo Chun</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<style lang="postcss">
    /* Remove default bullets */
    ul, #myUL {
    list-style-type: none;
    }

    /* Remove margins and padding from the parent ul */
    #myUL {
    margin: 0;
    padding: 0;
    }

    /* Style the caret/arrow */
    .caret {
    cursor: pointer;
    user-select: none; /* Prevent text selection */
    }

    /* Create the caret/arrow with a unicode, and style it */
    .caret::before {
    content: "\25B6";
    color: black;
    display: inline-block;
    margin-right: 6px;
    }

    /* Rotate the caret/arrow icon when clicked on (using JavaScript) */
    .caret-down::before {
    transform: rotate(90deg);
    }

    /* Hide the nested list */
    .nested {
    display: none;
    }

    /* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
    .active {
    display: block;
    }
</style>