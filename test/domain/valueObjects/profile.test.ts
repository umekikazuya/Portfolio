import {
  createProfileId,
  createProfileName,
  createProfileShortName,
  createProfileAddress,
  createProfileFrom,
  createProfileIntroduction,
  createProfileJob,
  createProfileSkill,
  createProfileLikes,
  createProfileGitHub,
  createProfileQiita,
  createProfileZenn,
} from "@/domain/valueObjects/profile";

describe("Profile Value Object Tests", () => {
  describe("createProfileId", () => {
    test("valid numeric ID", () => {
      expect(createProfileId(1)).toEqual({ ok: true, value: 1 });
    });

    test("invalid zero ID", () => {
      expect(createProfileId(0).ok).toBe(false);
    });

    test("invalid negative ID", () => {
      expect(createProfileId(-10).ok).toBe(false);
    });

    test("invalid non-numeric ID", () => {
      expect(createProfileId("abc").ok).toBe(false);
    });

    test("invalid null ID", () => {
      expect(createProfileId(null).ok).toBe(false);
    });

    test("invalid decimal ID", () => {
      expect(createProfileId(1.5).ok).toBe(false);
    });
  });

  describe("createProfileName", () => {
    test("valid name", () => {
      expect(createProfileName("officia eiusmod")).toEqual({ ok: true, value: "officia eiusmod" });
    });

    test("valid null name", () => {
      expect(createProfileName(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty name", () => {
      expect(createProfileName("")).toEqual({ ok: true, value: "" });
    });

    test("invalid non-string name", () => {
      expect(createProfileName(123).ok).toBe(false);
    });
  });

  describe("createProfileShortName", () => {
    test("valid short name", () => {
      expect(createProfileShortName("eiusmodofficia")).toEqual({ ok: true, value: "eiusmodofficia" });
    });

    test("valid null short name", () => {
      expect(createProfileShortName(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty short name", () => {
      expect(createProfileShortName("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileAddress", () => {
    test("valid address", () => {
      expect(createProfileAddress("Fukuoka, Japan.")).toEqual({ ok: true, value: "Fukuoka, Japan." });
    });

    test("valid null address", () => {
      expect(createProfileAddress(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty address", () => {
      expect(createProfileAddress("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileFrom", () => {
    test("valid from", () => {
      expect(createProfileFrom("Tokyo, Japan.")).toEqual({ ok: true, value: "Tokyo, Japan." });
    });

    test("valid null from", () => {
      expect(createProfileFrom(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty from", () => {
      expect(createProfileFrom("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileIntroduction", () => {
    test("valid introduction", () => {
      expect(createProfileIntroduction("Default Introduction")).toEqual({ ok: true, value: "Default Introduction" });
    });

    test("valid null introduction", () => {
      expect(createProfileIntroduction(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty introduction", () => {
      expect(createProfileIntroduction("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileJob", () => {
    test("valid job", () => {
      expect(createProfileJob("Web Creator")).toEqual({ ok: true, value: "Web Creator" });
    });

    test("valid null job", () => {
      expect(createProfileJob(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty job", () => {
      expect(createProfileJob("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileSkill", () => {
    test("valid skill list", () => {
      expect(createProfileSkill(["test", "hoge"])).toEqual({ ok: true, value: ["test", "hoge"] });
    });

    test("valid null skill list", () => {
      expect(createProfileSkill(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty skill list", () => {
      expect(createProfileSkill([])).toEqual({ ok: true, value: [] });
    });

    test("invalid skill list (non-array)", () => {
      expect(createProfileSkill("test").ok).toBe(false);
    });
  });

  describe("createProfileLikes", () => {
    test("valid likes list", () => {
      expect(createProfileLikes(["hoge", "fuga"])).toEqual({
        ok: true,
        value: ["hoge", "fuga"],
      });
    });

    test("valid null likes list", () => {
      expect(createProfileLikes(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty likes list", () => {
      expect(createProfileLikes([])).toEqual({ ok: true, value: [] });
    });

    test("invalid likes list (non-array)", () => {
      expect(createProfileLikes("hoge").ok).toBe(false);
    });
  });

  describe("createProfileGitHub", () => {
    test("valid GitHub username", () => {
      expect(createProfileGitHub("eiusmodofficia")).toEqual({ ok: true, value: "eiusmodofficia" });
    });

    test("valid null GitHub username", () => {
      expect(createProfileGitHub(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty GitHub username", () => {
      expect(createProfileGitHub("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileQiita", () => {
    test("valid Qiita username", () => {
      expect(createProfileQiita("eiusmodofficia")).toEqual({ ok: true, value: "eiusmodofficia" });
    });

    test("valid null Qiita username", () => {
      expect(createProfileQiita(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty Qiita username", () => {
      expect(createProfileQiita("")).toEqual({ ok: true, value: "" });
    });
  });

  describe("createProfileZenn", () => {
    test("valid Zenn username", () => {
      expect(createProfileZenn("hoge")).toEqual({ ok: true, value: "hoge" });
    });

    test("valid null Zenn username", () => {
      expect(createProfileZenn(null)).toEqual({ ok: true, value: null });
    });

    test("valid empty Zenn username", () => {
      expect(createProfileZenn("")).toEqual({ ok: true, value: "" });
    });
  });
});
