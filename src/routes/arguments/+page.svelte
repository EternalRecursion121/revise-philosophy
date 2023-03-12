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