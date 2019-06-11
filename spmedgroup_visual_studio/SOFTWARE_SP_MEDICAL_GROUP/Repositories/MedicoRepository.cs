using Microsoft.EntityFrameworkCore;
using SOFTWARE_SP_MEDICAL_GROUP.Domains;
using SOFTWARE_SP_MEDICAL_GROUP.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SOFTWARE_SP_MEDICAL_GROUP.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        public void Alterar(Medicos medico)
        {
            using (SpmedgroupContext ctx = new SpmedgroupContext())
            {
                ctx.Medicos.Update(medico);
                ctx.SaveChanges();
            }
        }

        public void Cadastrar(Medicos medico)
        {
            using (SpmedgroupContext ctx = new SpmedgroupContext())
            {
                ctx.Medicos.Add(medico);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int Id)
        {
            using (SpmedgroupContext ctx = new SpmedgroupContext())
            {
                Medicos medicoProcurado = ctx.Medicos.Find(Id);
                //Dá para fazer sem essa linha, mas aí o parâmetro seria Medicos medico, 
                //tendo que mandar todos os dados no Postman

                ctx.Medicos.Remove(medicoProcurado);
                ctx.SaveChanges();
            }
        }

        public List<Medicos> ListarMedicos(int idusuario, string tipousuario) //parâmetros necessários para distinguir usuários
        //Todos os usuários conseguem acessar a página que lista os médicos, mas apenas os ADMs conseguirão ver a lista.
        {
            using (SpmedgroupContext ctx = new SpmedgroupContext())
            {
                if (tipousuario == "ADM")
                {
                    return ctx.Medicos.Include(x => x.IdEspecialidadeNavigation).ToList();
                    //O include é necessário para que o sistema mostre o nomes da especialidade em vez do id dela.
                }

                return null;

            }
        }
    }
}

