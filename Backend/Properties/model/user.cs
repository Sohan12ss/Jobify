    namespace Properties.model;

    public class User
    {
        public int id {get;set;}

        public string FullName {get;set;}=string.Empty;

        public string Email{get;set;} = string.Empty;

        public string password{get;set;}=string.Empty;

        public string role{get;set;}="user";
    
    }