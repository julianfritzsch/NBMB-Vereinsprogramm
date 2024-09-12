using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
    [HttpGet]
    public Task<IActionResult> Hello()
    {
        return Task.FromResult<IActionResult>(Ok("Hello World from the backend!"));
    }

    [HttpPost]
    public OkObjectResult HelloName(Person person)
    {
        return Ok($"Hello {person.Name} from the backend!");
    }
}