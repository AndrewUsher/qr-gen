<script lang="ts">
  export let url = '';
  export let qrCodeDataURL = ''
  console.log(url);

  async function submitURL () {
    try {
      const res = await fetch('/generate-qr-code', {
        body: JSON.stringify({ url }),
        method: 'POST'
      })
      const data = await res.json()
      console.log(data)
      qrCodeDataURL = data.qrCodeDataURL
      console.log(qrCodeDataURL)
    } catch (err) {
      console.log(err)
    }
  }
</script>

<main class="sha shadow-lg bg-white p-8 rounded-md">
  <h1 class="text-center font-bold text-2xl mb-1">Welcome to QRGen!</h1>
  <p class="mb-4 text-center">Enter a URL below to generate a QR code</p>
  <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-60" placeholder="Enter URL Here" bind:value={url} />
	<button class="px-8 rounded-r-lg bg-blue-400  text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r" on:click={submitURL}>Generate QR Code</button>
  {#if qrCodeDataURL}
    <img class="m-auto w-60 h-60" src={qrCodeDataURL} alt={`QR Code for ${url}`} />
  {/if}
</main>
