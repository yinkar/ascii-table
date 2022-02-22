<script>
    export let character;
    export let show = false;
</script>


<div class="popup-overlay" on:click={() => show = false}></div>
<div class="ascii-popup">
    <p>
        <b>Order:</b> {character.ord}
    </p>

    {#if !!character.character}
    <p>
        <b>Character:</b> {character.character}
    </p>
    {/if}

    {#if !!character.abbr}
    <p>
        <b>Abbreviation:</b> {character.abbr}
    </p>
    {/if}

    {#if !!character.name}
    <p>
        <b>Name:</b> {character.name}
    </p>
    {/if}

    <p>
        <b>Binary:</b> 0b{character.ord.toString(2)}
    </p>
    <p>
        <b>Octal:</b> 0o{character.ord.toString(8)}
    </p>
    <p>
        <b>Hexadecimal:</b> 0x{character.ord.toString(16)}
    </p>

    <p>
        <a href={`https://en.wikipedia.org/wiki${character.wikipedia}` || '#'} target="_blank" class="wikipedia-link">Wikipedia <q>{character.name || character.character || ''}</q></a>
    </p>
    
    {#if !!character.key || !!character.character}
    <kbd>
        {character.key || character.character || ''}
    </kbd>
    {/if}
</div>


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

.ascii-popup .wikipedia-link q {
    quotes: "“" "”" "‘" "’";
}
</style>