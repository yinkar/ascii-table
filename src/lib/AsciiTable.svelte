<script>
    import Cell from "./Cell.svelte";
    import Popup from "./Popup.svelte";
    
    let showPopup = false;
    let selectedCharacter = {};

    import ascii from '../ascii.json';
    
    $: popupChanged(showPopup);

    /**
    * @param {boolean} show
    */
    function popupChanged(show) {
        if (show) {
            document.body.classList.add('popup-opened');
        }
        else {
            document.body.classList.remove('popup-opened');
        }
    } 

    /**
    * @param {{}} asciiCharacter
    */
    function openPopup(asciiCharacter) {
        selectedCharacter = asciiCharacter;
        showPopup = true;
    }

</script>


<div class="ascii-table">
    {#each ascii as asciiCharacter}
    <Cell 
        character={asciiCharacter} 
        clickHandler={openPopup} 
    />
    {/each}
</div>

{#if showPopup && !!selectedCharacter}
<Popup bind:character={selectedCharacter} bind:show={showPopup} />
{/if}


<style>
:global(body.popup-opened) {
    overflow: hidden;
}

.ascii-table {
    box-sizing: border-box;
    height: 840px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 600px;
    margin: 20px auto;
}

@media only screen and (max-width: 600px)  {
    .ascii-table {
        box-sizing: border-box;
        height: 1600px;
        width: 300px;
        margin: 10px auto;
    }
}
</style>