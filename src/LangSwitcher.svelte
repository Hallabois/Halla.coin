<script>
  let langs = ["fi", "en", "sp", "sv", "ge", "fr"];
  export let lang = "fi";
  let flags = {
    fi: "🇫🇮",
    en: "🇬🇧",
    sp: "🇪🇸",
    sv: "🇸🇪",
    ge: "🇩🇪",
    fr: "🇫🇷",
  };
  let langNames = {
    fi: "Suomi",
    en: "English",
    sp: "Español",
    sv: "Svenska",
    ge: "Deutsch",
    fr: "Français",
  };
  var localLang = localStorage.getItem("lang");
  if (langs.includes(localLang)) {
    lang = localLang;
  }
  $: flag = flags[lang];
  $: console.log('Switched lang to "' + lang + '"');
  $: localStorage.setItem("lang", lang);
  $: document.documentElement.lang = lang;
</script>

<main>
  <div>
    <!--<span>{flag}</span>-->
    <select bind:value={lang}>
      {#each langs as i}
        <option value={i}>{langNames[i]}-{flags[i]}</option>
      {/each}
    </select>
  </div>
</main>

<style>
  @font-face {
    font-family: emoji;
    src: url(https://xem.github.io/emoji/twemoji.ttf);
  }
  main {
    /*width: 90%;*/
    margin-right: 1em;
    text-align: right;
    font-size: 150%;
    margin-top: -0.3em;
  }
  select,
  option {
    font-family: emoji, inherit;
    font-size: 1.25rem;
    background: #1e2f3e;
    border: none;
    color: white;
    border-radius: 5px;
    margin-bottom: 0px;
    padding-top: 13px;
  }
  div {
    max-width: 6em;
    margin-left: auto;
    background: #1e2f3e;
    border-radius: 5px;
    padding: 0.2em;
  }
  span {
    margin-bottom: 0.5em;
  }
</style>
