<template>
  <div class="app">
    <b-row>
      style="margin: 0px auto;" justify="center" align="center">
      <b-col style="padding: 0px 0px;">
        <section id="main">
          <b-img
            :src="imageIndex"
            fluid
            alt="Responsive image"
          />
        </section>
      </b-col>
    </b-row>
    <!--
    <v-row style="margin: 0px auto;" justify="center" align="center">
      <v-main style="padding: 0px 0px;">
        <section id="main">
          <Slider v-model="number" style="width: 100%;" :min="0" :max="100" class="slider no-padding" />
        </section>
      </v-main>
    </v-row>

    <v-row style="margin: 0px auto;" justify="center" align="center">
      <v-main style="padding: 0px 0px;">
        <section id="main">
          <v-img

            :src="imageIndex"
          />
        </section>
      </v-main>
    </v-row>
-->
    <b-card
      outlined
      color="rgba(255, 255, 255, 0.01)"
      class="outlined transparent-body no-padding responsive-img"
      align="center"
      justify="center"
      style="margin: 0 auto;margin-top: -150px;"
    >
      <b-row align="center" justify="center">
        <b-col justify="center" style="padding-bottom: 0px;">
          <AppInput v-model="inputField" />
        </b-col>
      </b-row>
      <b-row align="center" justify="center" style="margin-top: 15px;">
        <b-col>
          <AppButton
            @click="handlerCreateClicked"
          >
            กดส่งเพื่อจารึกชื่อ
          </AppButton>
        </b-col>

        <b-modal

          max-width="340"
        >
          <b-card
            class="mx-auto my-12"
            color="rgba(255, 255, 255, 1)"
          >
            <b-row
              class="d-flex
            justify-center mb-2"
            >
              <b-img
                style="padding-top: 30px"
                max-height="60"
                max-width="60"

                :src="require('../assets/but-04.png')"
              />
            </b-row>

            <b-card-title class="headline d-flex justify-center" style="color: #3E2914;">
              <h4>ลงชื่อสำเร็จแล้ว</h4>
            </b-card-title>
            <b-card-text class="d-flex justify-center mb-6">
              <h5 style="text-align: center;" />
            </b-card-text>
            <b-card-actions>
              <b-spacer />
            </b-card-actions>
          </b-card>

          <b-row
            class="d-flex
            justify-center
            mb-6"
            style="padding-bottom: 15px"
          >
            <AppButton

              @click="loadCard"
            >
              <i class="fas fa-id-card" /> ดูการ์ดจารึกชื่อของคุณ
            </AppButton>
          </b-row>
        </b-modal>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import AppButton from '../components/Buttonsubmit'
import AppInput from '../components/AppInput'

export default {
  components: {
    AppButton,
    AppInput

  },

  data () {
    return {
      number: 0,
      inputField: '',
      inputTel: '',
      inputProvince: '',
      dialog: false,
      item: {
        title: null,
        descrition: 'ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1',
        coverImage: null,
        url: 'https://master.d1xnc86zjtxdwi.amplifyapp.com/'
      },
      blog: null,
      user: {
        displayName: '',
        userId: '',
        profile: '',
        email: ''
      }
    }
  },
  head () {
    return {
      title: this.titleName,
      meta: [
        { hid: 'description', property: 'description', content: this.$store.state.user.user.title },
        { hid: 'og:title', property: 'og:title', content: this.$store.state.user.user.title },
        { hid: 'og:description', property: 'og:description', content: `${this.$store.state.user.user.title} ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1` },
        { hid: 'og:url', property: 'og:url', content: this.item.url },
        { hid: 'og:image', property: 'og:image', content: this.$store.state.user.user.coverImage },

        { hid: 'og:type', property: 'og:type', content: 'website' }
      ].filter(x => x.content)
    }
  },

  computed: {
    src () {
      return this.$cloudinary.image.url(
        this.url,
        {
          gravity: 'auto:subject',
          width: '200',
          height: 200,
          crop: 'fill',
          radius: 'max'
        }
      )
    },
    userData () {
      return this.$store.state.user.user
    },

    imagehead () {
      return require('../assets/cove.jpg')
    },

    imageIndex () {
      return require('../assets/index.jpg')
    },
    pageUrl () {
      const domain = 'https://master.dgcxczf1bm4xy.amplifyapp.com/'
      return `https://${domain}/${this.$route.path}`
    },
    titleName () {
      return `${this.inputField} ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1`
    },
    coverImg () {
      const name = this.inputField
      if (name) {
        return `https://res.cloudinary.com/dda7dxqvr/image/upload/w_300,c_fit,l_text:sarabun.ttf_39:${name},y_220,co_rgb:3E2914/indexcard2.jpg`
      } else {
        return 'https://res.cloudinary.com/dda7dxqvr/image/upload/v1621888519/cardindex.jpg'
      }
    },
    register () {
      return {
        title: this.titleName,
        coverImage: this.coverImg
      }
    }
  },

  watch: {
  },
  async mounted () {
    this.item.title = this.titleName
    // eslint-disable-next-line no-undef
    await liff.init({
      liffId: '1656026908-31A2jyx9'
    }).then(() => {
      // eslint-disable-next-line no-undef
      if (liff.isLoggedIn()) {
        // eslint-disable-next-line no-undef
        // liff.getProfile().then((profile) => {
        //   this.user.profile = profile.pictureUrl
        //   this.user.displayName = profile.displayName
        //   this.user.userId = profile.userId
        // eslint-disable-next-line no-undef
        // if (liff.getDecodedIDToken().email) {
        //   // eslint-disable-next-line no-undef
        //   this.user.email = liff.getDecodedIDToken().email
        // } else {
        //   this.user.email = ''
        // }
        //    })
      } else {
        // console.log('no login')
        // eslint-disable-next-line no-undef
        liff.login()
      }
    })
    // console.log(this.user)
    // const response = await BlogsApi.index()
  },

  methods: {

    openDialog (event) {
      alert(event.target.tagName)
    },
    logInput () {
      // eslint-disable-next-line no-console
      console.log(this.titleName)
      // eslint-disable-next-line no-console
      console.log(this.coverImg)
    },
    loadCard () {
      const pa = this.inputField
      this.$router.push({ name: 'card', params: { id: pa } })
      // window.open(`https://res.cloudinary.com/dz4zph4bl/image/upload/l_text:Arial_100:${this.inputField},g_south,y_250,co_rgb:FFFFFF/web_qjelic.jpg`)
    },
    async handlerCreateClicked () {
      if (this.inputField.length === 0) {
        return
      }
      try {
        this.$store.commit('user/add', this.register)
        const instance = await this.$cloudinary
          .upload(this.$store.state.user.user.coverImage, {
            public_id: this.inputField,
            folder: 'default-upload',
            upload_preset: 'default-upload',
            tags: ['ลงชื่อเพื่อ ร่วมเป็น 1 ในผู้สถาปนา ในวันวิสาขบูชาโลก ออนไลน์ ครั้งที่1']
          })
        this.$store.commit('user/add_image', instance.secure_url)
        const userName = this.$fire.firestore.collection('users').doc()
        await userName.set({
          name: this.inputField.trim(),
          createAt: this.$fireModule.firestore.Timestamp.now(),
          userProfileLine: this.user.profile,
          userDisplayName: this.user.displayName,
          userId: this.user.userId,
          userCoverImage: this.$store.state.user.user.coverImage
        })
        this.loading_dialog = false
      } catch (e) {
        alert(e)
        return
      }
      this.dialog = true

      // API.post('reservetionApi', '/items', {
      //  body: {
      //    fname: name
      //  }
      // }).then((result) => {
      //  console.log(result)
      //  this.blog = JSON.parse(result.body)
      //  this.dialog = true
      // }).catch((err) => {
      //  console.log(err)
      // })
      // const pic = this.coverImg
      // const lat = this.randomLat
      // const long = this.randomLong

      // eslint-disable-next-line no-unused-expressions
      // const response = await BlogsApi.create(fname, lat, long, pic)
      // eslint-disable-next-line no-console
      // console.log('RESPONSE', response)
    }

  }

}
</script>

<style scoped>
div.app {
  width: 100%;
  margin: 0 auto;
}

.my-input.v-input .v-input__slot {
  border-radius: 100px;
}
.my-input .v-text-field__slot {

  color: #3E2914;
}

.responsive-img{
width: 100%;
height: auto;
}

.no-padding {
  padding: 0px 0px;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 68%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.transparent-body {
  background: transparent;

}
div.img-head {
  width: 100%;
  height: 30px;
  background-color: #fff;
  background-size: 100% 100%;

}

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;

}

.theme--light.v-sheet {
background: transparent;
}

.theme--light.v-card {
background: transparent;
}

.bg-cc {
  background-image: url('~assets/rebg.jpg');
}

</style>
