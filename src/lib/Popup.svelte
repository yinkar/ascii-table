<script>
    export let character;
    export let show = false;
</script>

<main>
    <div class="popup-overlay" on:click={() => show = false}></div>
    <div class="ascii-popup">
        <p>
            Order: {character.ord}
        </p>

        {#if !!character.character}
        <p>
            Character: {character.character}
        </p>
        {/if}

        {#if !!character.abbr}
        <p>
            Abbreviation: {character.abbr}
        </p>
        {/if}

        {#if !!character.name}
        <p>
            Name: {character.name}
        </p>
        {/if}

        <p>
            Binary: 0b{character.ord.toString(2)}
        </p>
        <p>
            Octal: 0o{character.ord.toString(8)}
        </p>
        <p>
            Hexadecimal: 0x{character.ord.toString(16)}
        </p>

        <p>
            <a href={`https://en.wikipedia.org/wiki${character.wikipedia}` || '#'} target="_blank" class="wikipedia-link">Wikipedia ({character.name || character.character || ''})</a>
        </p>
        
        {#if !!character.key || !!character.character}
        <kbd>
            {character.key || character.character || ''}
        </kbd>
        {/if}
    </div>
</main>

<style>
p {
    margin: 0;
    padding: 0;
}

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.ascii-popup {
    z-index: 10000;
    position: fixed;
    width: 50%;
    left: calc(50vw - 50% / 2);
    height: 150px;
    top: calc(50vh - 50% / 2);
    background-color: #444;
    border: 2px solid #555;
    border-radius: 2px;
    padding: 20px 15px;
    overflow: hidden;
    font-size: .8rem;
    line-height: 1.3rem;
}

.ascii-popup a {
    color: turquoise;
    text-decoration: none;
}

.ascii-popup a:hover {
    color: teal;
}

.ascii-popup kbd {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #555;
    border-radius: 3px;
    background-color: #222;
    color: #ddd;
    font-size: 1rem;
    font-family: monospace;
    position: absolute;
    right: 20px;
    top: 70px;
}

.ascii-popup .wikipedia-link {
    display: block;
}
</style>