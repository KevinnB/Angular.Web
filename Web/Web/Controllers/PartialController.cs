using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Web.Controllers
{

    public class PartialController : Controller
    {
        public ActionResult Card()
        {
            return Card();
        }
    }
}
