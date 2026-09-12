<template>
  <v-app>
    <v-main>
      <div class="page-bg d-flex align-center justify-center">
        <v-container class="py-10" fluid>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="5" lg="4">
              <v-card class="pay-card" elevation="10">
                <v-card-item class="text-center pt-8">
                  <div class="brand-badge mx-auto mb-4">
                    <v-icon icon="mdi-qrcode-scan" size="28" color="white" />
                  </div>
                  <h1 class="barriecito-regular text-h4 mb-1">Morgan's QRIS</h1>
                  <!-- <p class="text-body-2 text-medium-emphasis">
                    Scan pakai e-wallet atau m-banking!
                  </p> -->
                </v-card-item>

                <v-card-text class="text-center">
                  <v-sheet class="qr-frame mx-auto" rounded="lg">
                    <v-img
                      src="/assets/MorganQRIS.svg"
                      alt="QRIS code"
                      max-width="300"
                      class="mx-auto"
                    />
                  </v-sheet>

                  <!-- <v-chip
                    class="mt-4"
                    color="primary"
                    variant="tonal"
                    prepend-icon="mdi-check-decagram"
                    size="small"
                  >
                    QRIS Terverifikasi
                  </v-chip> -->
                </v-card-text>

                <v-card-actions class="flex-column px-6 pb-6">
                  <v-btn
                    block
                    size="large"
                    color="primary"
                    variant="flat"
                    rounded="lg"
                    prepend-icon="mdi-download"
                    class="mb-2"
                    @click="downloadQR"
                  >
                    Simpan QR
                  </v-btn>
                  <!-- <v-btn
                    block
                    size="large"
                    variant="tonal"
                    rounded="lg"
                    prepend-icon="mdi-share-variant"
                    @click="share"
                  >
                    Bagikan
                  </v-btn> -->
                </v-card-actions>
              </v-card>

              <!-- <p class="text-center text-caption text-white mt-6 footer-note">
                Dibuat dengan 🩷 oleh Morgan
              </p> -->
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
function downloadQR() {
  const link = document.createElement('a')
  link.href = '/assets/MorganQRIS.svg'
  link.download = 'MorganQRIS.svg'
  link.click()
}

// async function share() {
//   const shareData = {
//     title: "Morgan's QRIS",
//     text: 'Scan QRIS ini buat kirim dukungan ke Morgan!',
//     url: window.location.href,
//   }
//   if (navigator.share) {
//     try {
//       await navigator.share(shareData)
//     } catch {
//       // user cancel share, abaikan
//     }
//   } else {
//     await navigator.clipboard.writeText(shareData.url)
//   }
// }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barriecito&display=swap');

.barriecito-regular {
  font-family: "Barriecito", system-ui;
  font-weight: 400;
}

.page-bg {
  min-height: 100vh;
  /* ganti dua warna ini aja kalau mau ubah tema */
  background: linear-gradient(160deg, #1e293b 0%, #334155 100%);
}

.pay-card {
  border-radius: 28px !important;
  background: rgba(255, 255, 255, 0.96) !important;
}

.brand-badge {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #334155, #64748b);
}

.qr-frame {

  padding: 14px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.footer-note {
  opacity: 0.85;
}
</style>