<template>
  <div class="container n-padding-m">
    <h1 class="n-typescale-xxxl n-margin-b-m">Registration</h1>
    <provet-card class="n-margin-b-m">
      <div class="n-margin-b-m">
        <provet-input
          v-model="email"
          label="E-mail"
          placeholder="E-mail"
          type="email"
          required
          :error="errors.email"
          @input="validateEmail"
        ></provet-input>
      </div>
      <div class="n-margin-b-m">
        <provet-input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          required
          label="Password"
          placeholder="Password"
          :error="errors.password"
          @input="validatePassword"
        >
          <provet-icon
            slot="end"
            style="pointer-events: all; cursor: pointer;"
            :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'"
            @click.stop.prevent="showPassword = !showPassword"
          />
        </provet-input>
      </div>
      <div>
        <provet-checkbox
          v-model="updates"
          type="checkbox"
          label="Receive occasional product updates and announcements."
        />
      </div>
    </provet-card>
    <provet-button variant="primary" @click="submitForm" :disabled="isFormInvalid">
      Register
    </provet-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// TypeScript types for form fields and errors
const email = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const updates = ref<boolean>(false)
const errors = ref<{ email?: string; password?: string }>({})

// Vue Router instance
const router = useRouter()

// Validate email in real time
const validateEmail = (): void => {
  if (!email.value) {
    errors.value.email = 'E-mail is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = 'Invalid e-mail format'
  } else {
    delete errors.value.email
  }
}

// Validate password in real time (must be at least 3 characters)
const validatePassword = (): void => {
  if (!password.value) {
    errors.value.password = 'Password is required'
  } else if (password.value.length < 3) {
    errors.value.password = 'Password must be at least 3 characters'
  } else {
    delete errors.value.password
  }
}

// Check if the form has any errors
const isFormInvalid = computed<boolean>(() => Object.keys(errors.value).length > 0)

// Handle form submission
const submitForm = (): void => {
  validateEmail()
  validatePassword()

  if (isFormInvalid.value) return

  router.push('/success')
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
}
</style>
