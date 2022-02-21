<script>
    export let character;
    export let clickHandler;
</script>

<main>
    <div class="cell" title={character.name || character.character || ''} on:click={clickHandler(character)}>
        <div class="cell-decimal">
            {character.ord}
        </div>
        <div class="cell-content" class:cell-abbr={!!character.abbr} class:cell-character={!!character.character}>
            {character.abbr || character.character || ''}
        </div>
        <div class="cell-name">
            {character.name || ''}
        </div>
    </div>
</main>

<style>
.cell {
    width: 75px;
    height: 50px;
    border: 1px solid #333;
    background-color: #222;
    box-sizing: border-box;
    text-align: center;
    font-size: .6rem;
    overflow: hidden;
    padding: 3px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
}

.cell:hover {
    background-color: #444;
    color: #ddd;
    border-color: #888;
    transform: scale(1.2);
    border-radius: 2px;
}

.cell .cell-decimal {
    font-size: .7rem;
    text-align: right;
}

.cell .cell-content {
    font-size: 1rem;
    color: tomato;
}

.cell .cell-content.cell-abbr {
    font-style: oblique;
    color: darkorange;
}

.cell .cell-content.cell-character {
    height: 1rem;
}

.cell .cell-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .5rem;
    color: #999;
}
</style>