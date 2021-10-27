<template>
  <div class="toggle-checkbox">
    <input type="checkbox" name="status" id="status"
           class="toggle-checkbox__input visually-hidden"
           :checked="status === 'active'"
    >
    <label for="status" class="toggle-checkbox__label">
      <span class="dot"></span>
    </label>
  </div>
</template>

<script>
export default {
name: "ToggleCheckbox",
  props: ['status']
}
</script>
