// ⚠️ Aviso: As próximas linhas não funcionam nos projetos
// Teje avisado(a); ⚠️

/* eslint-disable padded-blocks */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// https://www.w3schools.com/js/js_scope.asp

// Global scope
let globalScopedVariable = 'hello, global!';

function scopeSample(assign) {
  // Start function scope

  let functionScopedVariable = 'hello, function!';

  if (assign) {
    // Start block scope (if)

    let blockScopedVariable = 'hello, block!';

  } // End block scope (if)

} // End function scope

scopeSample(true);

// End global scope
