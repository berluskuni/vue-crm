<template>
  <div>
    <div class="page-title">
      <h3>{{'ProfileTitle' | localize}}</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input 
          v-model="name" 
          id="description" 
          type="text" 
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
          />
        <label for="description">{{'Name' | localize}}</label>
        <small 
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >{{'Name field must not be empty' | localize}}</small>
      </div>
      <div class="switch">
        <label>
          {{'English' | localize}}
          <input type="checkbox" v-model="isRuLocale"/>
          <span class="lever"></span>
          {{'Russian' | localize}}
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{'Update' | localize}}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
import localizeFilter from '@/filters/localize.filter'


export default {
  metaInfo() {
    return {
    title:this.$title('ProfileTitle')
    }
  },
  data: () => ({
    name: '',
    isRuLocale: true
  }),
  validations: {
    name: {required},
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return 
      }
      try {
        await this.updateInfo({
          name: this.name,
          locale: this.isRuLocale ? 'ru-RU' : 'en-US'
        })
      } catch (e) {}
    }
  },
  mounted() {
    this.name = this.info.name
    this.isRuLocale = this.info.locale === 'ru-RU'
    setTimeout(() => {
      M.updateTextFields()
    })
  },
  computed: {
    ...mapGetters(['info'])
  }
}
</script>


<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>


