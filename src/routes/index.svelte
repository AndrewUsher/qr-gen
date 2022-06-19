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

<h1>Welcome to QRGen!</h1>
<p>Enter a URL below to generate a QR code</p>
<input type="text" placeholder="Enter URL Here" bind:value={url} />
<button on:click={submitURL}>Generate QR Code</button>
{#if qrCodeDataURL}
  <img src={qrCodeDataURL} alt={`QR Code for ${url}`} />
{/if}
