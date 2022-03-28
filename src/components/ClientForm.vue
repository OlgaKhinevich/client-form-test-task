<template>
  <form class="client-form" @submit.prevent="submitForm">
        <h2 class="title">Форма клиента</h2>
        <div class="input-field">
            <label>Фамилия <span class="invalid">*</span></label><br>
            <input 
                type="text"
                v-model.trim="form.surname"
                >
            <p
                class="note invalid"
                v-if="$v.form.surname.$dirty && !$v.form.surname.required"
            >Это обязательное поле</p>
        </div>
        <div class="input-field">
            <label>Имя <span class="invalid">*</span></label><br>
            <input 
                type="text"
                v-model.trim="form.name"
            >
            <p 
                class="note invalid"
                v-if="$v.form.name.$dirty && !$v.form.name.required"
            >Это обязательное поле</p>
        </div>
        <div class="input-field">
            <label>Отчество</label><br>
            <input 
                type="text"
                v-model.trim="form.patronymic"
            >
        </div>
        <div class="input-group">
            <div class="input-field">
                <label>Дата рождения <span class="invalid">*</span></label><br>
                <input 
                    type="date"
                    v-model="form.birthDate"
                >
                <p 
                    class="note invalid"
                    v-if="$v.form.birthDate.$dirty && !$v.form.birthDate.required"
                >Это обязательное поле</p>
            </div>
        <div class="input-field">
                <label>Номер телефона <span class="invalid">*</span></label><br>
                <input 
                    type="tel"
                    v-model.trim="form.phoneNumber"
                >
                <p
                    class="note invalid"
                    v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.required"
                >Это обязательное поле</p>
                <p 
                    class="note invalid"
                    v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.phoneLength"
                >Номер телефона должен содержать 11 цифр</p>
                <p 
                    class="note invalid"
                    v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.firstSymbol"
                >Номер должен начинаться с цифры 7</p>
            </div>
        </div>
        <div class="input-field">
            <label>Пол</label><br>
            <p><input 
                class="radio-btn"
                name="gender"
                type="radio"
                value=""
                id="radio1"
                v-model="form.gender">
                <label for="radio1">Не указано</label>
            </p>
            <p>
                <input
                class="radio-btn"
                name="gender"
                type="radio"
                value="male"
                id="radio2"
                v-model="form.gender">
                <label for="radio2">Мужской</label>
            </p>
            <p>
                <input
                class="radio-btn"
                name="gender"
                type="radio"
                value="female"
                id="radio3"
                v-model="form.gender">
                <label for="radio3">Женский</label>
            </p>
        </div>
        <div class="input-field">
            <label>Группа клиентов <span class="invalid">*</span></label><br>
            <select multiple v-model="form.selectedGroups">
                <option 
                    v-for="(clientGroup, index) in clientGroups" :key="index"
                    :value="clientGroup"
                    >{{clientGroup}}</option>
            </select>
            <p class="note">Для выбора нескольких групп зажмите клавиши <b>ctrl/cmd</b> или <b>shift</b> и кликните по пункту</p>
            <p 
                class="note invalid"
                v-if="$v.form.selectedGroups.$dirty && !$v.form.selectedGroups.required"
            >Это обязательное поле</p>
        </div>
        <div class="input-field">
            <label>Лечащий врач</label><br>
            <select v-model="form.selectedDoctor">
                <option 
                v-for="(doctor, index) in doctors" :key="index"
                :value="doctor"
                >{{doctor}}</option>
            </select>
        </div>
        <div class="input-field">
            <input class="checkbox" id="sms" type="checkbox" v-model="form.sms">
            <label for="sms">Не отправлять СМС</label>
        </div>
        <div class="address">
            <h3>Адрес</h3>
            <div class="input-group">
                <div class="input-field">
                    <label>Индекс</label><br>
                    <input type="text" v-model.trim="form.index">
                </div>
                <div class="input-field long">
                    <label>Страна</label><br>
                    <input type="text" v-model.trim="form.country">
                </div>
            </div>
            <div class="input-field">
                <label>Область</label><br>
                <input type="text" v-model.trim="form.region">
            </div>
            <div class="input-field">
                <label>Город <span class="invalid">*</span></label><br>
                <input
                    type="text"
                    v-model.trim="form.city"
                >
                <p 
                    class="note invalid"
                    v-if="$v.form.city.$dirty && !$v.form.city.required"
                >Это обязательное поле</p>
            </div>
            <div class="input-group">
                <div class="input-field">
                    <label>Улица</label><br>
                    <input type="text" v-model.trim="form.street">
                </div>
                <div class="input-field">
                    <label>Дом</label><br>
                    <input type="text" v-model="form.house">
                </div>
            </div>
        </div>
        <div class="document">
            <h3>Документ</h3>
            <div class="input-field">
                <label>Тип документа <span class="invalid">*</span></label><br>
                <select v-model="form.selectedDocument">
                    <option 
                    v-for="(document, index) in documents" :key="index"
                    :value="document"
                    >{{document}}</option>
                </select>
                <p
                    class="note invalid"
                    v-if="$v.form.selectedDocument.$dirty && !$v.form.selectedDocument.required"
                    >Это обязательное поле</p>
            </div>
            <div class="input-group">
                 <div class="input-field">
                    <label>Серия документа</label><br>
                    <input type="text" v-model.trim="form.docSeries">
                </div>
                <div class="input-field long">
                    <label>Номер документа</label><br>
                    <input type="text" v-model.trim="form.docNumber">
                </div>
            </div>
            <div class="input-field">
                <label>Кем выдан</label><br>
                <input type="text" v-model="form.issuedBy">
            </div>
            <div class="input-group">
                <div class="input-field">
                    <label>Дата выдачи <span class="invalid">*</span></label><br>
                    <input 
                        type="date"
                        v-model="form.issueDate"
                    >
                    <p 
                        class="note invalid"
                        v-if="$v.form.issueDate.$dirty && !$v.form.issueDate.required"
                    >Это обязательное поле</p>
                </div>
            </div>
        </div>
        <button class="submit-btn" type="submit">Отправить</button>
        <p class="status-note successfully" v-if="submitStatus === 'ok'">Форма заполнена верно</p>
        <p class="status-note invalid" v-if="submitStatus === 'error'">Пожалуйста, заполните форму правильно</p>
        <p class="status-note" v-if="submitStatus === 'pending'">Отправление...</p>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

const firstSymbol = (phone) => { return phone.startsWith("7") };
const phoneLength = (phone) => { return phone.length == 11 };

export default {
    name: "clientForm",
    data() {
        return {
            form: {
                surname: '',
                name: '',
                patronymic: '',
                birthDate: null,
                phoneNumber: '7',
                gender: '',
                selectedGroups: [],
                selectedDoctor: 'Не выбран',
                sms: false,
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                house: '',
                selectedDocument: '',
                docSeries: '',
                docNumber: '',
                issuedBy: '',
                issueDate: null
            },
            clientGroups: ['VIP', 'Проблемные', 'ОМС'],
            doctors: ['Не выбран', 'Иванов', 'Захаров', 'Чернышова'],
            documents: ['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение'],
            submitStatus: null
        }
    },
    validations: {
        form: {
            surname: { required },
            name: { required },
            patronymic: { },
            birthDate: { required },
            phoneNumber: {
                phoneLength,
                firstSymbol,
                required
            },
            selectedGroups: { required },
            city: { required },
            selectedDocument: { required },
            issueDate: { required }
        }
    },
    methods: {
        submitForm() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'error'
            } else {
                this.submitStatus = 'pending'
                setTimeout(() => {
                this.submitStatus = 'ok';
                }, 500)
            }
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/_variables.scss';
    @import '@/assets/_mixins.scss';

    .client-form {
        margin: 30px 0;
        width: 35%;
        max-width: 1000px;
        background-color: $form-bg;
        box-shadow: 0px 3px 10px -2px rgb(0 0 0 / 20%);;
        padding: 30px 60px;
        border-radius: 10px;
        box-sizing: border-box;
        .input-group { 
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .input-field { 
                width: 48%;
                input {
                    @include form-elements-default-styles;
                }
            }
        }
        .input-field {
            margin-bottom: 15px;
            max-width: 100%;
            label { margin-bottom: 7px; }
            p { margin: 5px 0; }
            input, select {
                font-size: 16px;
                border: 1px solid $input-border;
                background-color: $input-bg;
                line-height: 1.5;
                padding: 5px;
                border-radius: 3px;
                margin: 0 0 5px 0;
                font-family: 'Montserrat', sans-serif;
            }
            input[type="text"], select {
                @include form-elements-default-styles;
            }
            input[type="text"]:focus{
                background-color: #fff;
                border-color: $button-bg;
                outline: 0;
            }
            .radio-btn { @include custom-radio-button; }
            .checkbox { @include custom-checkbox; }
            .note {
                font-size: 12px;
                margin: 0;
            } 
        }
        .invalid { color: red; }
        .successfully { color: green; } 
        .submit-btn {
            border: none;
            font-size: 22px;
            padding: 10px 20px;
            color: $form-bg;
            border-radius: 7px;
            background-color: $button-bg;
            font-weight: 600;
        }
    }
</style>