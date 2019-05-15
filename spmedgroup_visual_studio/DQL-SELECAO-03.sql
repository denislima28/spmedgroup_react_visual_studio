USE SPMEDGROUP;

/*criou uma fun��o para retornar a quantidade de m�dicos de uma 
determinada especialidade*/


CREATE FUNCTION RETORNAR_NUMERO_MEDICOS(@RETORNO_NUMERO INT)
RETURNS TABLE
AS
RETURN SELECT ID_ESPECIALIDADE FROM MEDICOS WHERE ID_ESPECIALIDADE = @RETORNO_NUMERO;

SELECT COUNT(ID_ESPECIALIDADE) AS MEDICOS_ESPECIALIDADES FROM RETORNAR_NUMERO_MEDICOS(2); 
--AQUI, O 2 SE REFERE � ESPECIALIDADE PROCURADA


/*
Criou uma fun��o para que retorne a idade do usu�rio a partir de 
uma determinada stored procedure
*/

CREATE PROCEDURE CALCULAR_IDADE
AS
SELECT FLOOR(DATEDIFF(DAY, DATA_NASCIMENTO, GETDATE()) / 365.25) AS IDADES_PACIENTES FROM PRONTUARIOS_PACIENTES
GO;

EXEC CALCULAR_IDADE;


/*Mostrar quantidade de usuarios*/

SELECT COUNT(ID) AS NUMERO_USUARIOS FROM USUARIOS; 


/*COMANDO P/ VINCULAR TABELA DE PRONTU�RIO COM A DE CONSULTAS*/
SELECT * FROM PRONTUARIOS_PACIENTES INNER JOIN CONSULTAS ON CONSULTAS.ID_PRONTUARIO_PACIENTE = PRONTUARIOS_PACIENTES.ID;

/*COMANDO P/ VINCULAR TABELA DE PRONTU�RIO COM A DE CONSULTAS E A DE M�DICOS*/
SELECT * FROM PRONTUARIOS_PACIENTES INNER JOIN CONSULTAS ON CONSULTAS.ID_PRONTUARIO_PACIENTE = PRONTUARIOS_PACIENTES.ID INNER JOIN MEDICOS ON MEDICOS.ID = CONSULTAS.ID_MEDICO;

/*COMANDO P/ VINCULAR TABELA DE M�DICOS COM A DE ESPECIALIDADES*/
SELECT * FROM MEDICOS INNER JOIN ESPECIALIDADES ON ESPECIALIDADES.ID = MEDICOS.ID_ESPECIALIDADE;

/*COMANDO P/ VINCULAR TABELA DE M�DICOS COM A DE CL�NICAS*/ 
SELECT * FROM MEDICOS INNER JOIN CLINICAS ON CLINICAS.ID = MEDICOS.ID_CLINICA;


SELECT * FROM USUARIOS

SELECT * FROM TIPOS_USUARIO

SELECT * FROM MEDICOS

SELECT * FROM CONSULTAS

SELECT * FROM MEDICOS

SELECT * FROM PRONTUARIOS_PACIENTES

UPDATE MEDICOS
SET ID_USUARIO = 3
WHERE ID = 1;

UPDATE TIPOS_USUARIO
SET NOME = 'Medico'
WHERE ID = 2;