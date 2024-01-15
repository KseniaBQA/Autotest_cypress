
describe('Тестирование формы авторизации', function () {
   it('Покупка нового аватара тренера', function () {
      cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('kseniabelog@yandex.ru');
        cy.get('#password').type('Fhbufnj01');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111	');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1026');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ALEKSANDRA JULIA');
        cy.get('.pay-btn').should('be.visible');
        cy.wait(500);
        cy.get('.pay-btn').click();
        cy.wait(500);
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();

        
     })
})