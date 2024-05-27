/// <reference types="cypress" />
import { LoginPage } from "./pages/Login";

const login = new LoginPage(); //.. Instantiate Login Object

describe('Google Chrome', () => {
    it('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        login.enterUserName("Admin")
        login.enterPassword("admin123")
        login.clickToLogin();
    });
})