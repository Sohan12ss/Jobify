using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Properties.model.data;
using Properties.model;



namespace Controller;

[ApiController]
[Route("api/[Controller]")]

public class AuthController: ControllerBase
{
 private  readonly AppDbContext _context;
 public AuthController(AppDbContext context){
    _context=context;

 }
 [HttpPost("Register")]
public IActionResult Register(User user)
{
    user.password = BCrypt.Net.BCrypt.HashPassword(user.password);

    _context.Users.Add(user);
    _context.SaveChanges();

    return Ok("user Registered");
}

[HttpPost("Login")]
public IActionResult Login(User user){
    var dbuser=_context.Users.FirstOrDefault(u=>u.Email==user.Email);

    if(dbuser==null)
      return BadRequest("user not found");

    bool isValidPassword=BCrypt.Net.BCrypt.Verify(user.password,dbuser.password);

    if(!isValidPassword)
       return BadRequest("INVALID PASSWORD");

    return Ok("Login Successfull");
}
}