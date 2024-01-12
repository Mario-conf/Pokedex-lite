const poke_container = document.getElementById('poke-container');
const pokemon_count = 151;

const colors = {
    fire: '#fa5f49',
    grass: '#a3ffac',
    electric: '#FFD700',
    water: '#95b8f6',
    ground: '#d8af97',
    rock: '#ffffeb',
    fairy: '#f79ae5',
    poison: '#e79eff',
    bug: '#9bd3ae',
    dragon: '#97b3e6',
    psychic: '#e3b1c8',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);    
const pokemonImages = [
  "https://assetsio.reedpopcdn.com/pokemon_bulbasaur.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_ivysaur.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_venusaur.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_charmander.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_charmeleon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_charizard_CCi0TEW.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_squirtle.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_wartortle.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_blastoise.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_caterpie.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_metapod.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_butterfree.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_weedle.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kakuna.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_beedrill_wbncKz3.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_pidgey.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_pidgeotto.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_pidgeot.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_rattata.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_raticate.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_spearow.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_fearow.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_ekans.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_arbok.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_pikachu.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_raichu.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_sandshrew.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_sandslash.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidoran_female.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidorina.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidoqueen.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidoran_male.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidorino.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_nidoking.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_clefairy.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_clefable.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_vulpix.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_go_ninetails.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_jigglypuff.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_wigglytuff.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_zubat.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_golbat.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_oddish.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_gloom.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_vileplume.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_paras.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_parasect.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_venonat.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_venomoth.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_diglett.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dugtrio.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_meowth.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_persian.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_psyduck.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_golduck.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_mankey.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_primeape.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_growlithe.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_arcanine.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
 "https://assetsio.reedpopcdn.com/pokemon_poliwag.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_poliwhirl.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_poliwrath.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_abra.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kadabra.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_alakazam.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_machop.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_machoke.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_machamp.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_bellsprout.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_weepinbell.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_victreebel.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_tentacool.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_tentacruel.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_geodude.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_graveler.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_golem.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_ponyta.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_rapidash.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_slowpoke.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_slowbro.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_magnemite.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_magneton.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_farfetchd.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_doduo.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dodrio.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_seel.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dewgong.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_grimer.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_muk.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_shellder.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_cloyster.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_gastly.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_haunter.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_gengar.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_onix.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_drowzee.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_hypno.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_krabby.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kingler.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_voltorb.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_electrode.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_exeggcute.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_exeggutor.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_cubone.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_marowak.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_hitmonlee.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_hitmonchan.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_lickitung.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_koffing.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_weezing.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_rhyhorn.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_rhydon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_chansey.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_tangela.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kangaskhan.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_horsea.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_seadra.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_goldeen.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_seaking.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_staryu.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_starmie.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_mr_mime.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_scyther.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_jynx.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_electabuzz.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_magmar.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
 "https://assetsio.reedpopcdn.com/pokemon_pinsir.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_tauros.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_magikarp_I0hnwRz.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_gyarados.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_lapras.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_ditto.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_go_eevee.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_vaporeon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_jolteon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_flareon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_porygon.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_omanyte.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_omastar.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kabuto.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_kabutops.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_aerodactyl.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_snorlax.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_go_articuno.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_zapdos.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_go_moltres.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dratini.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dragonair.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_dragonite_EZ627Jq.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_go_mewtwo_ybXXm8V.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp",
  "https://assetsio.reedpopcdn.com/pokemon_mew.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
];

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const imageUrl = pokemonImages[id - 1]; 
    const pokemonName = data.name;
    const types = data.types.map(typeData => typeData.type.name);
    
    createPokemonCard(id, imageUrl, pokemonName, types);
};

const createPokemonCard = (id, imageUrl, name, types) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const type = types.find(type => main_types.includes(type)) || "unknown";
    
    const color = colors[type] || colors["unknown"];

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${imageUrl}" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    pokemonEl.style.backgroundColor = color;
    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
};

fetchPokemons();




