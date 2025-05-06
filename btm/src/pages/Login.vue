<template>
    <div class="flex min-h-full flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md mt-12">
            <h2 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your
                account</h2>
        </div>

        <div class="my-6 sm:mx-auto sm:w-full sm:max-w-[400px]">
            <div class="bg-white dark:bg-gray-900 px-6 py-8 shadow-sm sm:rounded-lg sm:px-12">
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200">Email
                            address</label>
                        <div class="mt-1">
                            <input v-model="form.email" @blur="validateEmail" :class="{ 'outline-red-500': errors.email }"
                                type="email" name="email" id="email" autocomplete="email" required
                                class="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                                aria-describedby="email-error">
                            <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-red-600">{{ errors.email }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label for="password"
                            class="block text-sm/6 font-medium text-gray-900 dark:text-gray-200">Password</label>
                        <div class="mt-1 relative">
                            <input v-model="form.password" @blur="validatePassword"
                                :type="showPassword ? 'text' : 'password'" :class="{ 'outline-red-500': errors.password }"
                                name="password" id="password" autocomplete="current-password" required
                                class="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                                aria-describedby="password-error">
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                :aria-label="showPassword ? 'Hide password' : 'Show password'">
                                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fill-rule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                                        clip-rule="evenodd" />
                                    <path
                                        d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                </svg>
                            </button>
                            <p v-if="errors.password" id="password-error" class="mt-1 text-sm text-red-600">{{
                                errors.password }}</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex gap-3">
                            <div class="flex h-6 shrink-0 items-center">
                                <div class="group grid size-4 grid-cols-1">
                                    <input v-model="form.rememberMe" id="remember-me" name="remember-me" type="checkbox"
                                        class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white dark:bg-gray-800 checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto">
                                    <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                        viewBox="0 0 14 14" fill="none">
                                        <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <label for="remember-me" class="block text-sm/6 text-gray-900 dark:text-gray-200">Remember
                                me</label>
                        </div>

                        <div class="text-sm/6">
                            <a href="#"
                                class="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">Forgot
                                password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" :disabled="isSubmitting"
                            class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            {{ isSubmitting ? 'Signing in...' : 'Sign in' }}
                        </button>
                    </div>
                </form>

                <div>
                    <div class="relative mt-6">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-sm/6 font-medium">
                            <span class="bg-white dark:bg-gray-900 px-6 text-gray-900 dark:text-gray-200">Or continue
                                with</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <button @click="handleGoogleSignIn"
                            class="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-xs ring-1 ring-gray-300 dark:ring-gray-700 ring-inset hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-transparent">
                            <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                    fill="#EA4335" />
                                <path
                                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                    fill="#4285F4" />
                                <path
                                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                    fill="#FBBC05" />
                                <path
                                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                    fill="#34A853" />
                            </svg>
                            <span class="text-sm/6 font-semibold">Google</span>
                        </button>
                    </div>
                </div>
            </div>

            <p class="mt-6 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                Not a member?
                <a href="/signup"
                    class="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">Create
                    account here</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
    email: '',
    password: '',
    rememberMe: false
})

const errors = reactive({
    email: '',
    password: ''
})

const isSubmitting = ref(false)
const showPassword = ref(false)

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email) {
        errors.email = 'Email is required'
    } else if (!emailRegex.test(form.email)) {
        errors.email = 'Please enter a valid email address'
    } else {
        errors.email = ''
    }
}

const validatePassword = () => {
    if (!form.password) {
        errors.password = 'Password is required'
    } else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
    } else {
        errors.password = ''
    }
}

const handleSubmit = async () => {
    validateEmail()
    validatePassword()

    if (errors.email || errors.password) {
        return
    }

    try {
        isSubmitting.value = true
        // Add your login logic here
        // Example: await loginUser(form.email, form.password)
        console.log('Form submitted:', form)
    } catch (error) {
        console.error('Login error:', error)
    } finally {
        isSubmitting.value = false
    }
}

const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Google sign-in clicked')
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
